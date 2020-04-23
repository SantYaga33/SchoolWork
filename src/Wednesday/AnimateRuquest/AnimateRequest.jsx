import React from 'react';
import styles from './Animaterequest.module.css';
import axios from 'axios';


class AnimateRequest extends React.Component {
	constructor (props) {
		super (props);
		this.myClass = class Gravity {
			constructor (id, newText) {
				this.id = id;
				this.text = newText;

				let that = this;
				let element = document.getElementById (id);
				let text = newText || element.textContent;
				let arr = text.split ('');

				this.animate = true;
				this.floating = true;
				this.resetTime = 0;

				this.positionType = getComputedStyle (element).position;

				this.lerp = function (e, t, i) {
					return (1 - i) * e + i * t;
				}
				this.checkBound = function () {
					if ( element.hasAttribute ("data-bound") ) {
						return element.dataset.bound === "true";
					}
				}

				this.useBound = this.checkBound ();
				this.colors = [
					'#f44336', '#e91e63', '#9c27b0',
					'#673ab7', '#3f51b5', '#2196f3',
					'#03a9f4', '#00bcd4', '#009688',
					'#4caf50', '#8bc34a', '#cddc39',
					'#ffeb3b', '#ffc107', '#ff9800',
					'#ff5722', '#795548', '#9e9e9e',
					'#607d8b'
				];

				this.randomColor = function () {
					let randNum = Math.floor (Math.random () * this.colors.length);
					return this.colors[randNum];
				}

				this.bounds = this.useBound ? {
					min: {
						x: element.offsetLeft,
						y: element.offsetTop
					},
					max: {
						x: element.offsetLeft + element.offsetWidth,
						y: element.offsetTop + element.offsetHeight
					}
				} : {
					min: {
						x: 0,
						y: 0
					},
					max: {
						x: window.innerWidth,
						y: window.innerHeight
					}
				}

				this.pointInCircle = function (point, target, radius) {
					let distsq = (point.x - target.x) * (point.x - target.x) + (point.y - target.y) * (point.y - target.y);
					return [ distsq <= radius * radius, distsq ];
				}

				function createSpan (text, pos) {
					let span = document.createElement ('span');
					span.innerHTML = text;
					span.style.position = "relative";
					span.style.display = "inline-block";
					span.style.minWidth = "10px";
					span.style.color = that.randomColor ();
					span._own = {
						pos: {
							x: 0,
							y: 0
						},
						vel: {
							x: -0.5 + Math.random (),
							y: -0.5 + Math.random ()
						},
						speed: {
							x: 1,
							y: 1
						},
						dir: {
							x: 1,
							y: 1
						}
					}
					return span;
				}

				this.textSpans = [];

				element.innerHTML = '';

				arr.forEach (function (t, i) {
					let el = createSpan (t, {
						x: 0,
						y: 0
					});
					element.appendChild (el);
					that.textSpans.push (el);
				});

				this.getDim = function () {

					this.textSpans.forEach (function (t, i) {
						let offset = {
							x: 0,
							y: 0
						};
						if ( that.positionType === 'relative' || that.positionType === 'absolute' ) {
							offset.x = element.offsetLeft
							offset.y = element.offsetTop
						}
						t._own.real = {
							x: offset.x + t.offsetLeft,
							y: offset.y + t.offsetTop
						}
						t._own.size = {
							x: t.offsetWidth,
							y: t.offsetHeight
						}

					});

				};

				this.getDim ();

				this.floatText = function () {
					this.textSpans.forEach (function (t, i) {

						if ( t._own.pos.x + t._own.real.x < that.bounds.min.x || t._own.pos.x + t._own.real.x + t._own.size.x > that.bounds.max.x ) {
							t._own.dir.x *= -1;
						}
						if ( t._own.pos.y + t._own.real.y < that.bounds.min.y || t._own.pos.y + t._own.real.y + t._own.size.y > that.bounds.max.y ) {
							t._own.dir.y *= -1;
						}
						t._own.pos.x += (t._own.vel.x * t._own.speed.x) * t._own.dir.x;
						t._own.pos.y += (t._own.vel.y * t._own.speed.y) * t._own.dir.y;
						t.style.transform = 'translateX(' + t._own.pos.x + 'px) translateY(' + t._own.pos.y + 'px)';

					});
				}
				this.update = function () {
					if ( this.animate ) {
						if ( this.floating ) {
							this.floatText ();
						} else {
							this.floatBackwards ();
						}
					}
				}

				this.floatBackwards = function () {
					this.textSpans.forEach (function (t, i) {

						let x = that.lerp (t._own.pos.x, 0, that.resetTime / 10);
						let y = that.lerp (t._own.pos.y, 0, that.resetTime / 10);

						t.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';

					});

					if ( this.resetTime === 10 ) {
						this.animate = false;
						this.resetTime = 0;
					}
					this.resetTime++;
				}
				this.reset = function () {
					this.floating = false;
				}
				this.restart = function () {
					this.textSpans.forEach (function (t, i) {
						t._own.pos.x = 0;
						t._own.pos.y = 0;
					});
					this.floating = true;
					this.animate = true;
				}

				window.onresize = function () {
					that.getDim ();
				}
			}
		}
	}

	state = {
		status: false,
		responseMessage: 'Ожидаем сообщения с сервера!'
	}

	time = 0;

	startAnimate () {
		if ( this.gravity.animate ) {
			this.gravity.reset ();
			this.paragraph.reset ();
		} else {
			this.gravity.restart ();
			this.paragraph.restart ();
		}
	};

	animate (time) {
		requestAnimationFrame (this.animate.bind (this));

		this.animation (time);
	};

	animation (time) {
		this.paragraph.update ();
		this.gravity.update ();
	};

	componentDidMount () {
		this.paragraph = new this.myClass ('text');
		this.gravity = new this.myClass ('reset');
		this.animate (0);
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		if ( prevState.responseMessage !== this.state.responseMessage ) {
			this.paragraph = new this.myClass ('text', this.state.responseMessage);
			this.gravity = new this.myClass ('reset');
		}
	}

	toggleRequest = (e) => {
		let status = e.currentTarget.checked;
		this.setState ({
			status: status
		})
	}

	requestToServer = (status) => {
		return axios.post (`https://neko-cafe-back.herokuapp.com/auth/test`, { success: status })
	}

	sendRequest = async () => {
		try {
			const response = await this.requestToServer (this.state.status);
			console.log ('answer:', response.data);
			this.setState ({
				responseMessage: response.data.info
			})
			return response;
		} catch (e) {
			console.log ('error:', { ...e });
			this.setState ({
				responseMessage: e.response.data.info
			})
			return 'error';
		}
	}

	render = () => {
		return (
			<div className={styles.animate__wrap}>
				<p className={styles.animate__text} id="text">Сервером называется компьютер, выделенный из группы
					персональных компьютеров (или рабочих станций) для выполнения какой-либо сервисной задачи без
					непосредственного участия человека. Сервер и рабочая станция могут иметь одинаковую аппаратную
					конфигурацию, так как различаются лишь по участию в своей работе человека за консолью.
					{this.state.responseMessage}</p>

				<div className={styles.requestserver__wrap}>
					<input className={styles.requestserver__checkbox} type='checkbox' id='checkboxId'
						   onChange={this.toggleRequest}/>
					<label htmlFor='checkboxId'></label>
					<button className={styles.requestserver__button} onClick={this.sendRequest}>Send</button>
					<button className={styles.animate__button} id="reset" data-bound="true"
							onClick={this.startAnimate.bind (this)}>reset
					</button>

				</div>
			</div>
		)

	}
}

export default AnimateRequest;

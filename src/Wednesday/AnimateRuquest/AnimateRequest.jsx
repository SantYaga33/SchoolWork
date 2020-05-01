import React from 'react';
import styles from './Animaterequest.module.css';
import { Gravity } from "./GravityAnimateRequest";
import { tryCatch } from "../Dal/Api";


class AnimateRequest extends React.Component {

	state = {
		status: false,
		responseMessage: 'Ожидаем сообщения с сервера!',
		inProgress: false
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
		this.paragraph = new Gravity ('text');
		this.gravity = new Gravity ('reset');
		this.animate (0);
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		if ( prevState.responseMessage !== this.state.responseMessage ) {
			this.paragraph = new Gravity ('text', this.state.responseMessage);
			this.gravity = new Gravity ('reset');
		}
	}

	toggleRequest = (e) => {
		debugger
		let status = e.currentTarget.checked;
		this.setState ({
			status: status
		})
	}

	sendRequest =  () => {
		this.setState ({ inProgress: true }, async () => {
			let response =  await tryCatch (this.state.status);
			this.setState ({
				responseMessage: response,
				inProgress: false
			})
		})
	}

	render = () => {
		let classBtnSend = this.state.inProgress ? `${styles.requestserver__button} ${styles.requestserver__inProgress}` :
			`${styles.requestserver__button}`;

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
					<label htmlFor='checkboxId'> </label>
					<button className={classBtnSend} disabled={this.state.inProgress}
							onClick={this.sendRequest}>Send
					</button>
					<button className={styles.animate__button} id="reset" data-bound="true"
							onClick={this.startAnimate.bind (this)}>reset
					</button>

				</div>
			</div>
		)

	}
}

export default AnimateRequest;





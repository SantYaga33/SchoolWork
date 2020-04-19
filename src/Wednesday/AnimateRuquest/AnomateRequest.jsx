import React from 'react';
import styles from './Animaterequest.module.css'
import render, { buttonRef, textRef } from "./animate";


export const textRef = React.createRef();
export const buttonRef = React.createRef();


class AnimateRequest extends React.Component {

	// componentDidMount () {
	// 	render(0);
	// }


	render = () => {
		return (
			<div className={styles.animate__wrap}>
				<p className={styles.animate__text} id="text"  ref={textRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Doloremque porro illo voluptates,
					delectus fugiat culpa aspernatur cupiditate ipsa cum totam sapiente non error veritatis dignissimos
					in.
					Corporis soluta, quo iure.</p>
				<button className={styles.animate__button} id="reset" data-bound="true"  ref={buttonRef}>reset</button>
			</div>
		)

	}


};


export default AnimateRequest;
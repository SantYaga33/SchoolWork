import React from 'react';
import styles from './WelcomeInput.module.css';

const WelcomeInput = (props) => {
	const test = (e) => {
		let target = e.currentTarget;
		console.dir(target.getAttribute);
	};

	return (
		<div className={styles.input_wrap}>
			<input type="text" className={styles.input} placeholder='Введите Ваше имя' onChange={props.onChange}
				   onKeyPress={props.onKeyPress} value={props.state.titleNewTask} />
		</div>
	);
};

export default WelcomeInput;

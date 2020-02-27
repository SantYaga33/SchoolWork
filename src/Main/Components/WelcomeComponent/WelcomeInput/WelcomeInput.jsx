import React from 'react';
import styles from './WelcomeInput.module.css';

const WelcomeInput = (props) => {
	return (
		<div className={styles.input_wrap}>
			<input ref={props.inputRef} type="text" className={styles.input} placeholder='Введите Ваше имя'
				   onChange={props.onChange}/>
		</div>
	);
};

export default WelcomeInput;

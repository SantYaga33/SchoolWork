import React from 'react';
import styles from './WelcomeInput.module.css';

const WelcomeInput = (props) => {
		return (
			<div className={ styles.input_wrap }>
				<input type="text" className={styles.input} placeholder='Введите Ваше имя'/>
			</div>
		);
};

export default WelcomeInput;

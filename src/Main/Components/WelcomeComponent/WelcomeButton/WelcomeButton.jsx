import React from 'react';
import styles from './WelcomeButton.module.css';

const WelcomeButton = (props) => {
		return (
			<div className={ styles.button_wrap }>
				<button className={ styles.button }>{ props.titleButton }</button>
			</div>
		);
};

export default WelcomeButton;

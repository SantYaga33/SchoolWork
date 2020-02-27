import React from 'react';
import styles from './WelcomeButton.module.css';

const WelcomeButton = (props) => {

	const onAddNameClick = () => {
		let newName = props.inputRef.current.value;
		props.addName(newName);
	};

	return (
		<div className={styles.button_wrap}>
			<button className={styles[props.state.activeClassBtn]} onClick={onAddNameClick}
					disabled={props.state.buttonStatus}>
				{props.state.titleButton}
			</button>
		</div>
	);
};

export default WelcomeButton;

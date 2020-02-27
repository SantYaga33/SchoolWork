import React from 'react';
import styles from './Welcome.module.css';
import WelcomeInput from "./WelcomeInput/WelcomeInput";
import WelcomeButton from "./WelcomeButton/WelcomeButton";

const Welcome = (props) => {
	return (
		<div className={styles.welcome}>
			<h5>Познакомимся ?</h5>
			<div className={styles.wrap}>
				<WelcomeInput inputRef={props.inputRef} onChange={props.onChange}/>
				<WelcomeButton inputRef={props.inputRef} addName={props.addName}
							   state={props.state} buttonRef={props.buttonRef}/>
			</div>
		</div>
	);
};

export default Welcome;

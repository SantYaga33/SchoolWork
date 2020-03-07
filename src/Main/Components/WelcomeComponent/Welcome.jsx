import React from 'react';
import styles from './Welcome.module.css';
import WelcomeInput from "./WelcomeInput/WelcomeInput";
import WelcomeButton from "./WelcomeButton/WelcomeButton";

const Welcome = (props) => {

	const onAddNamePress = (e) => {
		if ( e.key === "Enter" ) {
			props.addName();
		} else {
			return false
		}
	};

	return (
		<div className={styles.welcome}>
			<h5>Познакомимся ?</h5>
			<div className={styles.wrap}>
				<WelcomeInput  state={props.state}  onChange={props.onChange} onKeyPress={onAddNamePress}/>
				<WelcomeButton  addName={props.addName} state={props.state} buttonRef={props.buttonRef}/>
			</div>
		</div>
	);
};

export default Welcome;

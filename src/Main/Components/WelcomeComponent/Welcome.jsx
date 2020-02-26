import React from 'react';
import styles from './Welcome.module.css';
import WelcomeInput from "./WelcomeInput/WelcomeInput";
import WelcomeButton from "./WelcomeButton/WelcomeButton";

const Welcome = (props) => {
		return (
			<div className={ styles.welcome }>
				<h5>Познакомимся ?</h5>
				<div className={styles.wrap}>
					<WelcomeInput/>
					<WelcomeButton titleButton={props.state}/>
				</div>
			</div>
		);
};

export default Welcome;

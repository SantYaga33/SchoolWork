import React from 'react';
import styles from './WelcomePage.module.css';



class WelcomePage extends React.Component {

	constructor (props) {
		super (props);
	}

	render = () => {
		return (
			<div className={styles.welcome_main}>
				<div className={styles.welcome_wrap}>
					<h1 className={styles.welcome_title}> WELCOME !!!</h1>
					<h4 className={styles.welcome_text}> Let`s name your first TODO  </h4>
					<span>enjoy :)</span>
				</div>
			</div>
		);
	};
}

export default WelcomePage;

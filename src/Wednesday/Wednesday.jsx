import React from 'react';
import styles from './Wednesday.module.css'

const Wednesday = () => {

	return (
		<div className={styles.main}>
			<div className={styles.switch__wrapper}>
				<div className={styles.switch}>
					<input name="switch" id="one" type="radio" checked/>




					<label htmlFor="one" className={styles.switch__label}>One</label>

					<input name="switch" id="two" type="radio"/>
					<label htmlFor="two" className={styles.switch__label}>Two</label>
					<input name="switch" id="three" type="radio"/>
					<label htmlFor="three" className={styles.switch__label}>Three</label>
					<div className={styles.switch__indicator}></div>
				</div>
			</div>
		</div>
	)


};

export default Wednesday;
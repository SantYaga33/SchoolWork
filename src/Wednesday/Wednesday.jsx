import React from 'react';
import styles from './Wednesday.module.css'

const Wednesday = () => {

	return (
		<div className={styles.wednesday__bg}>

			<div className={`${styles.wednesday__border} ${styles.border__one}`}>
				<div className={`${styles.wednesday__border} ${styles.border__two}`}>

				</div>
			</div>
			<div className={styles.continput__wrap}>
				<div className={styles.continput}>
					<ul className={styles.continput__ul}>
						<li className={styles.continput__li}>
							<input checked type="radio" name="1" id='one'/>
							<label htmlFor='one'>green theme</label>
							<div className={styles.bullet}>
								<div className={`${styles.line} ${styles.zero}`}></div>
								<div className={`${styles.line} ${styles.one}`}></div>
								<div className={`${styles.line} ${styles.two}`}></div>
								<div className={`${styles.line} ${styles.three}`}></div>
								<div className={`${styles.line} ${styles.four}`}></div>
								<div className={`${styles.line} ${styles.five}`}></div>
								<div className={`${styles.line} ${styles.six}`}></div>
								<div className={`${styles.line} ${styles.seven}`}></div>
							</div>
						</li>
						<li className={styles.continput__li}>
							<input type="radio" name="1" id='two'/>
							<label htmlFor='two'>dark theme </label>
							<div className={styles.bullet}>
								<div className={`${styles.line} ${styles.zero}`}></div>
								<div className={`${styles.line} ${styles.one}`}></div>
								<div className={`${styles.line} ${styles.two}`}></div>
								<div className={`${styles.line} ${styles.three}`}></div>
								<div className={`${styles.line} ${styles.four}`}></div>
								<div className={`${styles.line} ${styles.five}`}></div>
								<div className={`${styles.line} ${styles.six}`}></div>
								<div className={`${styles.line} ${styles.seven}`}></div>
							</div>
						</li>
						<li className={styles.continput__li}>
							<input type="radio" name="1" id='three'/>
							<label htmlFor='three'>light theme </label>
							<div className={styles.bullet}>
								<div className={`${styles.line} ${styles.zero}`}></div>
								<div className={`${styles.line} ${styles.one}`}></div>
								<div className={`${styles.line} ${styles.two}`}></div>
								<div className={`${styles.line} ${styles.three}`}></div>
								<div className={`${styles.line} ${styles.four}`}></div>
								<div className={`${styles.line} ${styles.five}`}></div>
								<div className={`${styles.line} ${styles.six}`}></div>
								<div className={`${styles.line} ${styles.seven}`}></div>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)

};

export default Wednesday;
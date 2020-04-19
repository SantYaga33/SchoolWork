import React from 'react';
import styles from './Wednesday.module.css'
import { connect } from "react-redux";
import { setTheme} from "../Redux/WednesdayReducer/WednesdayReducer";
import ConnectedAnimateRequest from "./AnimateRuquest/AnomateRequest";

const Wednesday = (props) => {

	const onChangeTheme = (e) =>{
		let currentTheme;
		if(e.currentTarget.checked) {
			currentTheme = e.currentTarget.value;
		}
		props.setTheme(currentTheme);
	};

	return (
		<div className={styles.wednesday__bg}>
			<div className={`${styles[props.style]} ${styles.border__one}`}>
				<div className={`${styles[props.style]} ${styles.border__two}`}>
					<div className={styles.wednesday__animate}>
						<ConnectedAnimateRequest />
					</div>
				</div>
			</div>
			<div className={styles.continput__wrap}>
				<div className={styles.continput}>
					<ul className={styles.continput__ul}>
						<li className={styles.continput__li}>
							<input defaultChecked type="radio" name="1" id='one' value='green' onChange={onChangeTheme}/>
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
							<input type="radio" name="1" id='two' value='gray' onChange={onChangeTheme}/>
							<label htmlFor='two'>gray theme </label>
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
							<input type="radio" name="1" id='three' value='red' onChange={onChangeTheme}/>
							<label htmlFor='three'>red theme </label>
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

const mapStateToProps = (state) => {
	return {
		style: state.wednesdayReducer.style
	}
};


const ConnectedWednesday = connect (mapStateToProps, {setTheme}) (Wednesday);

export default ConnectedWednesday;
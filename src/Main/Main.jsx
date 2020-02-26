import React from 'react';
import styles from './Main.module.css';
import MyName from "./Components/MyNameComponent/MyName";
import MySkills from "./Components/MySkillsComponent/MySkills";

const Main = (props) => {
	return (
		<div className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_wrap}>
					<MyName state={props.state}/>
					<MySkills state={props.state}/>
				</div>
			</div>
		</div>
	);
};

export default Main;

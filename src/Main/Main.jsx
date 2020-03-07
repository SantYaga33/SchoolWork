import React from 'react';
import styles from './Main.module.css';
import MyName from "./Components/MyNameComponent/MyName";
import MySkills from "./Components/MySkillsComponent/MySkills";
import Welcome from "./Components/WelcomeComponent/Welcome";
import Visitors from "./Components/ VisitorsComponent/Visitors";
import Comment from "./Components/CommentComponent/Comment";

const Main = (props) => {
	return (
		<div className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_wrap}>
					<MyName state={props.state}/>
					<MySkills state={props.state.mySkills}/>
					<Welcome state={props.state} addName={props.addName} buttonRef={props.buttonRef}
																		 onChange={props.onChange}/>
					<Visitors state={props.state}/>
				</div>
					<Comment/>
			</div>
		</div>
	);
};

export default Main;

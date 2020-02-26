import React from 'react';
import styles from './MyName.module.css';
import AnimatedItem from "./AnimatedItem";

const MyName = (props) => {

	const actionLetter = props.state.letters.map(el => <AnimatedItem className={styles.item} letter={el}/>);

	return (
		<div className={styles.wrap}>
			{actionLetter}
		</div>
	);
};

export default MyName;

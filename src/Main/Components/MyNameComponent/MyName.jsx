import React from 'react';
import styles from './MyName.module.css';
import AnimatedItem from "./AnimatedItem";

const MyName = (props) => {

	const actionLetter = props.state.letters.map(el => <AnimatedItem className={styles.item}
																	 key={el.id} letter={el.letter}/>);

	return (
		<div className={styles.name}>
			<ul className={styles.wrap}>
				{actionLetter}
			</ul>
		</div>
	);
};

export default MyName;

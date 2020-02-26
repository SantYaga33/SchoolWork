import React from 'react';
import styles from './MySkills.module.css';
import ItemSkills from "./ItemSkills";

const MySkills = (props) => {

	const Item =props.state.mySkills.map( el => <ItemSkills className={styles.item} key={el.id} skillValue={el.title}/>);

		return (
			<div className={ styles.wrap } >
				{ Item }
			</div>
		);
};

export default MySkills;

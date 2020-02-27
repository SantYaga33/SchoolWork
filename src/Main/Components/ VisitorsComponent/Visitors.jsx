import React from 'react';
import styles from './Visitors.module.css';
import CreateLiElement from "./CreateLiElement";

const Visitors = (props) => {

	const newFriends = props.state.visitors.map(el => <CreateLiElement name={el.name} key={el.id}/>);

	return (
		<div className={styles.visitors}>
			<h5>К нам заходили в гости:</h5>
			<div className={styles.wrap}>
				<ul className={styles.list}>
					{newFriends}
				</ul>
			</div>
		</div>
	);
};

export default Visitors;

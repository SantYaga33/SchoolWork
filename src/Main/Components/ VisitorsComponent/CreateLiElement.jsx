import React from 'react';
import styles from './Visitors.module.css';

const CreateLiElement = (props) => {
	return <li className={styles.item}>{props.name}</li>
};

export default CreateLiElement;

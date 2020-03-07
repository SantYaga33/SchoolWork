import React from 'react';
import {NavLink} from "react-router-dom";


const Generate_li = (props) => {
	return (
		<li>
			<NavLink to={props.to} discr={props.discr} className={props.className}
					 activeClassName={props.active} onClick={props.onClick}>
				<span className={props.classForTitle}>{props.title}</span>
				<span className={props.classForDiscr} >{props.discr}</span>
			</NavLink>
		</li>
	);
};

export default Generate_li;


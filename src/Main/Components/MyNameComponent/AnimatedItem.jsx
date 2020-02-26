import React from 'react';

const AnimatedItem = (props) => {
	return (
		<li className={props.className}>
			{props.letter}
		</li>
	);
};

export default AnimatedItem;
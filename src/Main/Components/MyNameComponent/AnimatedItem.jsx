import React from 'react';

const AnimatedItem = (props) => {
	return (
		<div className={props.className}>
			{props.letter}
		</div>
	);
};

export default AnimatedItem;
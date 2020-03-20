import React from 'react';
import './Loader.css';


class Loader extends React.Component {
	constructor (props) {
		super (props);
	}
	render () {
		return (
			<div className='wrap_loader'>
				<div className="container">
					<div className="r"></div>
					<div className="r"></div>
					<div className="r"></div>
					<div className="r"></div>
					<div className="r"></div>
				</div>
			</div>
		);
	}
}

export default Loader;
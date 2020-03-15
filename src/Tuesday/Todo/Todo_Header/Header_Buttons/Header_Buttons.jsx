import React from 'react';
import styles from './Header_Buttons.module.css';


class HeaderButtons extends React.Component {
	constructor (props) {
		super (props);
	}
	onAllFilterClick = () => {
		this.props.changeFilter ('All');
	};

	onCompletedFilterClick = () => {
		this.props.changeFilter ('Completed');
	};

	onActiveFilterClick = () => {
		this.props.changeFilter ('Active');
	};

	render () {
		return (
			<div className={styles.header_buttons}>
				<button className={styles.header_buttons__item} onClick={this.onAllFilterClick} >All</button>
				<button className={styles.header_buttons__item} onClick={this.onCompletedFilterClick} >Done</button>
				<button className={styles.header_buttons__item} onClick={this.onActiveFilterClick}>Active</button>
			</div>
		);
	};
}

export default HeaderButtons;
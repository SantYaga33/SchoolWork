import React from 'react';
import styles from './Todo_Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderButtons from "./Header_Buttons/Header_Buttons";


class Header extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {
		isHidden: false
	};

	onShowFiltersClick = () => {
		this.setState ({
			isHidden: this.isHidden
		});
	};
	onHideFiltersClick = () => {
		this.setState ({
			isHidden: !this.isHidden
		});
	};

	render () {
		return (
			<div className={styles.header}>
				<div className={styles.header_title}>{this.props.title}</div>
				<div className={styles.header_logo}>
					<div className={styles.header_logo__icon}>
						<FontAwesomeIcon icon={[ 'fab', 'sith' ]} spin size='lg'/>
					</div>
					<div className={styles.header_logo__hide}>
						{this.state.isHidden && <button className={styles.header_logo__button}
														onClick={this.onShowFiltersClick}>show</button>}
						{!this.state.isHidden && <button className={styles.header_logo__button}
														 onClick={this.onHideFiltersClick}>hide</button>}

					</div>
				</div>
				{!this.state.isHidden && <HeaderButtons changeFilter={this.props.changeFilter}/>}
			</div>
		);
	};
}

export default Header;
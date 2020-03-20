import React from 'react';
import styles from './CreateItemTitle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


class CreateItemTitle extends React.Component {
	constructor (props) {
		super (props);
	}

	onChoiceItem = () => {
		this.props.choiceItem (this.props.id);

	};

	onDeleteItem = () => {
		this.props.deleteItem (this.props.id);
	};

	render () {

		return (
			<li className={this.props.selectItem ? ` ${styles.item} ${ styles.select}`: styles.item}>
				<div className={styles.item_title} onClick={this.onChoiceItem}>{this.props.title}</div>
				<div className={styles.item_button} onClick={this.onDeleteItem}>
					<button>
						<FontAwesomeIcon className={styles.item_icon} icon={faTrashAlt} size='lg'/>
					</button>
				</div>
			</li>
		);
	}
}

export default CreateItemTitle;
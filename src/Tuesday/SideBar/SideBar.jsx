import React from 'react';
import styles from './SideBar.module.css';
import CreateItemTitle from "./CreateItem/CreateItemTitle";


class SideBar extends React.Component {
	constructor (props) {
		super (props);
	}

	render () {
		let itemTitleList = this.props.todolists.map (el =>
			<CreateItemTitle key={el.id} id={el.id} title={el.titleItem} choiceItem={this.props.choiceItem}
							 deleteItem={this.props.deleteItem} selectItem={el.selectItem}/>);

		return (
			<div className={styles.wrap}>
				<div className={styles.tasks_wrap__input}>
					<div className={styles.tasks_input}>
						<input className={this.props.errorTitle ? styles.inputError : ''}
							   value={this.props.titleItem} type="text" placeholder='Enter name'
							   onKeyPress={this.props.onAddItemKeyPress} onChange={this.props.onTitleItemChange}
							   maxLength="8"/>
						<button className='tasks_button' onClick={this.props.onAddItemClick}>add</button>
					</div>
				</div>
				<div className={styles.list_items}>
					<ul>
						{itemTitleList}
					</ul>
				</div>
			</div>
		);
	}
}

export default SideBar;
import React from 'react';
import './Tuesday.css';
import TodoList from "./TodoList/TodoList";
import Loader from "./Loader/Loader";
import SideBar from "./SideBar/SideBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import { connect } from "react-redux";
import { loaderOf } from "../Redux/TuesdayReducer/TuesdayReducer";


class Tuesday extends React.Component {

	state = {
		todolists: [
			{ id: 0, titleItem: 'My notice', display: true, selectItem: true },
		],
		errorTitle: false,
		titleItem: '',
		nextTaskId: 1,
		isTodo: true

	};

	componentDidMount () {
		setTimeout (() => {
			this.props.loaderOf (false);
		}, 3000);
		this.restoreState ();
	};

	saveState = () => {
		let stateAsString = JSON.stringify (this.state);
		localStorage.setItem ('Todo-list', stateAsString);
	};

	restoreState = () => {
		let state = {
			tasks: [
				{
					id: 0,
					title: 'Example',
					isDone: false,
					priority: 'high'
				},
				{
					id: 1,
					title: 'Example',
					isDone: false,
					priority: 'low'
				},
				{
					id: 2,
					title: 'Example',
					isDone: true,
					priority: 'medium'
				},
			],
			filterValue: 'All',
			nextTaskId: 3,
		};
		let stateAsString = localStorage.getItem ('Todo-list');
		if ( stateAsString !== null ) {
			state = JSON.parse (stateAsString);
		}
		this.setState (state);
	};

	addItem = (title) => {
		let newItem = {
			id: this.state.nextTaskId,
			titleItem: title,
			display: false,
			selectItem: false
		};

		let newTodolists = [ ...this.state.todolists, newItem ];
		this.setState ({
			todolists: newTodolists,
			nextTaskId: this.state.nextTaskId + 1,
		}, () => {
			this.setState ({
				isTodo: true,
				todolists: this.state.todolists.map ((todo, index) => {
					if ( index === this.state.todolists.length - 1 ) {
						return { ...todo, display: true, selectItem: true }
					} else {
						return { ...todo, display: false, selectItem: false }
					}
				})

			}, () => this.saveState (this.state));
		});
	};

	onAddItemClick = () => {
		let newTitleItem = this.state.titleItem;
		this.setState ({
			titleItem: ''
		});
		if ( newTitleItem === '' ) {
			this.setState ({
				errorTitle: true
			}, () => {
				this.saveState (this.state);
			});
		} else {
			this.setState ({
				errorTitle: false
			}, () => {
				this.saveState (this.state);
			});
			this.addItem (newTitleItem);
		}
	};
	onAddItemKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			let newTitleItem = this.state.titleItem;
			this.setState ({
				titleItem: ''
			});
			if ( newTitleItem === '' ) {
				this.setState ({
					errorTitle: true
				}, () => {
					this.saveState (this.state);
				});
			} else {
				this.setState ({
					errorTitle: false
				}, () => {
					this.saveState (this.state);
				});
				this.addItem (newTitleItem);
			}
		}
	};

	onTitleItemChange = (e) => {
		this.setState ({
			errorTitle: false,
			titleItem: e.currentTarget.value
		}, () => {
			this.saveState (this.state);
		});

	};
	choiceItem = (itemId) => {
		this.setState ({
			todolists: this.state.todolists.map (todo => {
				if ( todo.id === itemId ) {
					return { ...todo, display: true, selectItem: true }
				} else {
					return { ...todo, display: false, selectItem: false }
				}
			})
		}, () => {
			this.saveState (this.state);
		});
	};

	deleteItem = (itemId) => {
		if ( this.state.todolists.length - 1 !== 0 ) {
			this.setState ({
				isTodo: true,
				todolists: this.state.todolists.filter (todo => todo.id !== itemId)
			}, () => {
				this.setState ({
					todolists: this.state.todolists.map ((todo, index) => {
						if ( index === this.state.todolists.length - 1 ) {
							return { ...todo, display: true, selectItem: true }
						} else {
							return { ...todo, display: false, selectItem: false }
						}
					})
				}, () => this.saveState (this.state));
			});
		} else {
			this.setState ({
				todolists: this.state.todolists.filter (todo => todo.id !== itemId),
				isTodo: false
			}, () => {
				this.saveState (this.state);
			});
		}
	};


	render () {
		let todoListElements = this.state.todolists.map (td =>
			<TodoList id={td.id} title={td.titleItem} display={td.display ? 'display_block' : 'display_none'}/>);

		return (

			<div className='main_page'>
				{this.props.loader ? <Loader/> :
					<div className='main_page__wrap'>
						<SideBar errorTitle={this.state.errorTitle} todolists={this.state.todolists}
								 choiceItem={this.choiceItem}
								 deleteItem={this.deleteItem} onAddItemKeyPress={this.onAddItemKeyPress}
								 onTitleItemChange={this.onTitleItemChange} titleItem={this.state.titleItem}
								 onAddItemClick={this.onAddItemClick}/>
						<div className='join'></div>

						<div className='wrap_items'>
							{this.state.isTodo ?
								<div>{todoListElements}</div>
								: <WelcomePage/>
							}
						</div>
					</div>
				}
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		loader: state.loader
	}
};


const connectTuesday = connect (mapStatetoProps, { loaderOf }) (Tuesday);

export default connectTuesday;




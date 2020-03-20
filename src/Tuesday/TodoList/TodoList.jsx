import React from 'react';
import './TodoList.css';
// import { saveState, restoreState } from './localStorage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Root from "./../Todo/Root";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

library.add (fab,faTrashAlt);

class TodoList extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {

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
		filterValue: "All",
		nextTaskId: 3,
	};

	componentDidMount () {
		this.restoreState ();
	};

	// componentDidMount () {
	// 	let state = restoreState (this.state);
	// 	this.setState (state);
	//
	// };

	saveState = () => {
		let stateAsString = JSON.stringify (this.state);
		localStorage.setItem ('our-state-' + this.props.id, stateAsString);
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
		let stateAsString = localStorage.getItem ('our-state-' + this.props.id);
		if ( stateAsString !== null ) {
			state = JSON.parse (stateAsString);
		}
		this.setState (state);
	};

	addTask = (title) => {
		let newTask = {
			id: this.state.nextTaskId,
			title: title,
			isDone: false,
			priority: 'low'
		};

		let newTasks = [ ...this.state.tasks, newTask ];
		this.setState ({
			tasks: newTasks,
			nextTaskId: this.state.nextTaskId + 1,
		}, () => {this.saveState (this.state);});

	};

	changeFilter = (newFilterValue) => {
		this.setState ({
			filterValue: newFilterValue
		}, () => {this.saveState (this.state);})
	};
	changeTask = (taskId, obj) => {
		let newTasks = this.state.tasks.map (t => {
			if ( t.id === taskId ) {
				return { ...t, ...obj }
			} else {
				return t
			}
		});
		this.setState ({
			tasks: newTasks
		}, () => {this.saveState (this.state);})
	};

	changeStatus = (taskId, isDone) => {
		this.changeTask (taskId, { isDone: isDone });

	};
	changeTitle = (taskId, title) => {
		this.changeTask (taskId, { title: title });

	};
	changePriority = (taskId, priority) => {
		this.changeTask (taskId, { priority: priority });

	};

	deleteTask = (taskId) => {
		let newTasks = this.state.tasks.filter (t => t.id !== taskId);
		this.setState ({
			tasks: newTasks
		}, () => {this.saveState (this.state);})
	};

	render = () => {
		return (
			<div>
				<div className="todoList">
					<Root state={this.state} addTask={this.addTask} changeFilter={this.changeFilter} id={this.props.id}
						  changeTitle={this.changeTitle} changeStatus={this.changeStatus} deleteTask={this.deleteTask}
						  changePriority={this.changePriority} title={this.props.title} display={this.props.display}
						  tasks={this.state.tasks.filter (t => {
							  return this.state.filterValue === "Active" && t.isDone === false ||
								  this.state.filterValue === "Completed" && t.isDone === true ||
								  this.state.filterValue === "All"
						  })}/>
				</div>
			</div>
		);
	};
}

export default TodoList;
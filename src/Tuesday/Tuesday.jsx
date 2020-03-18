import React from 'react';
import './Tuesday.css';
import { saveState, restoreState } from './localStorage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Root from "./Todo/Root";
import Loader from "./Loader/Loader";


library.add (fab);

class Tuesday extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {

		tasks: [
			{
				id: 0,
				title: 'Example1',
				isDone: false,
				priority: 'high'
			},
			{
				id: 1,
				title: 'Example2',
				isDone: false,
				priority: 'low'
			},
			{
				id: 2,
				title: 'Example3',
				isDone: true,
				priority: 'medium'
			},
		],
		filterValue: "All",
		nextTaskId: 3,
		loader: true
	};

	componentDidMount () {
		let newState = restoreState ();
		if ( !!newState ) {
			this.setState (newState);
		} else {
			this.setState (this.state);
		}
		setTimeout (() => {
			this.setState ({
				loader: false
			});

		}, 3000)
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
		}, () => {saveState (this.state);});

	};

	changeFilter = (newFilterValue) => {
		this.setState ({
			filterValue: newFilterValue
		}, () => {saveState (this.state);})
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
		}, () => {saveState (this.state);})
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
		}, () => {saveState (this.state);})
	};

	render = () => {
		return (
			<div className='wrap_tuesday'>
				{this.state.loader ? <Loader /> :
				<div className='main_wrap'>
					<div className='main_opacity'>
						<div className="todoList">
							<Root state={this.state} addTask={this.addTask} changeFilter={this.changeFilter}
								  changeTitle={this.changeTitle} changeStatus={this.changeStatus}
								  deleteTask={this.deleteTask}
								  changePriority={this.changePriority}
								  tasks={this.state.tasks.filter (t => {
									  return this.state.filterValue === "Active" && t.isDone === false ||
										  this.state.filterValue === "Completed" && t.isDone === true ||
										  this.state.filterValue === "All"
								  })}/>
						</div>
					</div>
				</div>}
			</div>
		);
	};

}

export default Tuesday;
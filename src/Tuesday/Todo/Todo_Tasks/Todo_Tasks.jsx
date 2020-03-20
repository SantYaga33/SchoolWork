import React from 'react';
import styles from './Todo_Tasks.module.css';
import TodoTask from "./Todo_Task/Todo_Task";


class TodoTasks extends React.Component {

	constructor (props) {
		super (props);
	}

	state = {
		error: false,
		title: ''
	};

	onAddTaskClick = () => {
		let newText = this.state.title;
		this.setState ({
			title: ''
		});
		if ( newText === '' ) {
			this.setState ({
				error: true
			});
		} else {
			this.setState ({
				error: false
			});
			this.props.addTask (newText);
		}
	};
	onAddTaskKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			let newText = this.state.title;
			this.setState ({
				title: ''
			});
			if ( newText === '' ) {
				this.setState ({
					error: true
				});
			} else {
				this.setState ({
					error: false
				});
				this.props.addTask (newText);
			}
		}
	};

	onTitleChange = (e) => {
		this.setState ({
			error: false,
			title: e.currentTarget.value
		});

	};
	errorClass = styles.inputError;
	render = () => {

		let tasksElements = this.props.tasks.map (task => {
			return (
				<TodoTask changeStatus={this.props.changeStatus} key={task.id} id={task.id} priority={task.priority}
						  task={task} changeTitle={this.props.changeTitle} deleteTask={this.props.deleteTask}
						  changePriority={this.props.changePriority}/>
			)
		});
		return (
			<div className={styles.tasks_wrap}>
				<div className={styles.tasks_wrap__input}>
					<div className={styles.tasks_input}>
						<input className={this.state.error ? this.errorClass : ''} value={this.state.title}
							   type="text" placeholder='Enter task name' onKeyPress={this.onAddTaskKeyPress}
							   onChange={this.onTitleChange} maxLength="15"/>
						<button className={styles.tasks_button} onClick={this.onAddTaskClick}>add</button>
					</div>
				</div>
				{tasksElements}
			</div>
		);
	};
}

export default TodoTasks;
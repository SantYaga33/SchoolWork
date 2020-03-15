import React from 'react';
import styles from './App.module.css'
import Main from "./Main/Main";
import Menu from "./Menu/Menu";
import First_page from "./First_Page/First_page";
import { BrowserRouter, Route } from "react-router-dom";
import Tuesday from "./Tuesday/Tuesday";

class App extends React.Component {
	constructor (props) {
		super (props);
		this.onChange = this.onChange.bind (this);

	}

	state = {
		letters: [
			{ id: 1, letter: 'A' }, { id: 2, letter: 'T' }, { id: 3, letter: 'A' }, { id: 4, letter: 'B' },
			{ id: 5, letter: 'A' }, { id: 6, letter: 'L' }, { id: 7, letter: 'O' }, { id: 8, letter: 'V' },
			{ id: 9, letter: '' }, { id: 10, letter: 'M' }, { id: 11, letter: 'U' }, { id: 12, letter: 'R' },
			{ id: 13, letter: 'A' }, { id: 14, letter: 'D' } ],
		mySkills: [ { id: 1, title: 'Лидер' }, { id: 2, title: 'Целеустремленный' }, {
			id: 3,
			title: 'Жизнерадостный'
		} ],
		titleButton: 'Ожидание',
		buttonStatus: true,
		activeClassBtn: 'wait',
		visitors: [],
		count: 0,
		titleNewTask: '',
		navLinks: [
			{ id: 1, title: 'Monday', description: 'Работа с инпутами' },
			{ id: 2, title: 'Tuesday', description: 'Работа с инпутами' },
			{ id: 3, title: 'Wednesday', description: 'Работа с инпутами' },
			{ id: 4, title: 'Thursday', description: 'Работа с инпутами' },
			{ id: 5, title: 'Friday', description: 'Работа с инпутами' }
		]

	};

	onChange (e) {
		this.setState ({
				titleNewTask: e.currentTarget.value,
				buttonStatus: false,
				activeClassBtn: 'send',
				titleButton: 'Отправить'
			}
		);
		if ( e.currentTarget.value === '' ) {   // не работает ветка - при вводе пробела
			return this.setState ({
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание'
				}
			)
		}
	};

	addName = () => {
		let newName = this.state.titleNewTask.trim ();
		if ( newName === '' ) {
			this.setState ({
					titleNewTask: '',
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание'
				}
			);
		} else {
			alert (`Приветствую Тебя друг ${newName}!!!`);
			let newVisitor = { id: this.state.count, name: newName };
			this.setState ({
					titleNewTask: '',
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание',
					visitors: [ ...this.state.visitors, newVisitor ],
					count: this.state.count + 1
				}
			);
		}
	};

	render = () => {
		return (
			<BrowserRouter>
				<div className={styles.main_wrap}>
					<div className={styles.main_nav}>
						<Menu navLinks={this.state.navLinks}/>
					</div>
					<div className={styles.main_pages}>
						<Route path='/SchoolWork/' exact={true} render={() => <First_page/>}/>
						<Route path='/Monday' exact={true}
							   render={() => <Main state={this.state} inputRef={this.inputRef}
												   buttonRef={this.buttonRef}
												   addName={this.addName}
												   onChange={this.onChange}/>}/>
						<Route path='/Tuesday' exact={true} render={() => <Tuesday/>}/>
						<Route path='/Wednesday' exact={true} render={() => <First_page/>}/>
						<Route path='/Thursday' exact={true} render={() => <First_page/>}/>
						<Route path='/Friday' exact={true} render={() => <First_page/>}/>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

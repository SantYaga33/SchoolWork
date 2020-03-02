import React from 'react';
import Main from "./Main/Main";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);

	}

	state = {
		letters: [
			{id: 1, letter: 'A'}, {id: 2, letter: 'T'}, {id: 3, letter: 'A'}, {id: 4, letter: 'B'},
			{id: 5, letter: 'A'}, {id: 6, letter: 'L'}, {id: 7, letter: 'O'}, {id: 8, letter: 'V'},
			{id: 9, letter: ''}, {id: 10, letter: 'M'}, {id: 11, letter: 'U'}, {id: 12, letter: 'R'},
			{id: 13, letter: 'A'}, {id: 14, letter: 'D'}],
		mySkills: [{id: 1, title: 'Лидер'}, {id: 2, title: 'Целеустремленный'}, {id: 3, title: 'Жизнерадостный'}],
		titleButton: 'Ожидание',
		buttonStatus: true,
		activeClassBtn: 'wait',
		visitors: [],
		count: 0
	};

	inputRef = React.createRef();


	onChange() {
		this.setState({
				buttonStatus: false,
				activeClassBtn: 'send',
				titleButton: 'Отправить'
			}
		);
		if (this.inputRef.current.value === '') {
			return this.setState({
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание'
				}
			)
		}
	};

	addName = (title) => {
		let newName = title.trim();
		if (newName === '') {
			this.inputRef.current.value = '';
			this.setState({
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание'
				}
			);
		} else {
			alert(`Приветствую Вас ${newName}!!!`);
			this.inputRef.current.value = '';
			let newVisitor = {id: this.state.count, name: newName};
			this.setState({
					buttonStatus: true,
					activeClassBtn: 'wait',
					titleButton: 'Ожидание',
					visitors: [...this.state.visitors, newVisitor],
					count: this.state.count + 1
				}
			);
		}
	};

	render = () => {
		return (
			<Main state={this.state} inputRef={this.inputRef} buttonRef={this.buttonRef} addName={this.addName}
				  onChange={this.onChange}/>
		);
	}
}

export default App;

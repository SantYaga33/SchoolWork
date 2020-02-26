import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
	letters: [
		{id:1, letter:'A'},{id:1, letter:'T'},{ id:1, letter:'A'},{ id:1, letter:'B'},{ id:1, letter:'A'},
		{ id:1, letter:'L'},{id:1, letter:'O'},{ id:1, letter:'V'},{ id:1, letter:''},{ id:1, letter:'M'},
		{ id:1, letter:'U'},{ id:1, letter:'R'},{ id:1, letter:'A'},{ id:1, letter:'D'}],
	mySkills:[{id:1, title:'Лидер'},{id:2, title:'Целеустремленный'},{id:3 ,title:'Жизнерадостный'}]
};

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

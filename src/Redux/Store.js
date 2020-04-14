import { combineReducers, createStore } from 'redux';
import { tuesdayReducer } from './TuesdayReducer/TuesdayReducer';
import { wednesdayReducer } from "./WednesdayReducer/WednesdayReducer";


const reducers = combineReducers({
	tuesdayReducer: tuesdayReducer,
	wednesdayReducer :wednesdayReducer

});

const store = createStore (reducers);

export default store;
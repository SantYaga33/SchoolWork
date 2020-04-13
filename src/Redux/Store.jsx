import { createStore } from 'redux';
import { tuesdayReducer } from './TuesdayReducer/TuesdayReducer';


const store = createStore (tuesdayReducer);

export default store;
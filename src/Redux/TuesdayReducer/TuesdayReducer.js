import { LOADER_OFF } from "./TuesdayAC";

export const loaderOf = (loader) => {
	return { type: LOADER_OFF, loader }
};

let initState = {

	loader: true
};

export const tuesdayReducer = (state = initState, action) => {

	switch ( action.type ) {
		case LOADER_OFF:
			return {
				...state,
				loader: action.loader
			};
		default :
			return state
	}

};
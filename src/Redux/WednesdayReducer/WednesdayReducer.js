import { SET_THEME } from "./WednesdayAC";

export const setTheme = (currentTheme) => {
	return { type: SET_THEME, currentTheme }
};

let initState = {
	style : 'green'
};

export const wednesdayReducer = (state = initState, action) => {
	switch ( action.type ) {
		case SET_THEME:
			return {
				...state,
				style: action.currentTheme
			};
		default :
			return state
	}

};
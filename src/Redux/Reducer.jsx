export const LOADER_OFF = 'LOADER_OFF';


export const loaderOf = (loader) => {
	return { type: LOADER_OFF, loader }
};

let initState = {

	loader: true
};

export const reducer = (state = initState, action) => {

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
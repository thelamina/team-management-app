export const GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS';
export const GET_EVENTS_PROGRESS_SUCCESS = 'GET_EVENTS_PROGRESS_SUCCESS';
export const GET_EVENTS_LIST_FAIL = 'GET_EVENTS_LIST_FAIL';

export const eventReducer = (state: any, action: any) => {
	switch (action.type) {
		case GET_EVENTS_LIST_SUCCESS:
			return {
				...state,
				isLoading: false,
				events: action.payload,
			};

		case GET_EVENTS_PROGRESS_SUCCESS:
			return {
				...state,
				isLoading: false,
				progress: action.payload,
			};

		default:
			return state;
	}
};

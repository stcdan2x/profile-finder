import { SEARCH_USERS, SET_LOADING, SET_SEARCH_MSG } from "../actionTypes";

const GithubReducer = (state: any, action: any) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		case SET_SEARCH_MSG:
			return {
				...state,
				searchAlertMsg: action.msg,
				loading: false
			};

		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				searchAlertMsg: action.msg,
				loading: false
			};

		default:
			return state;
	}
};

export default GithubReducer;

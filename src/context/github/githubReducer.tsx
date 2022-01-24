import {
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	SEARCH_USERS,
	SET_LOADING,
	SET_SEARCH_MSG,
	STOP_LOADING
} from "../actionTypes";

const GithubReducer = (state: any, action: any) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		case STOP_LOADING:
			return {
				...state,
				loading: false
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
				showClearBtn: true,
				loading: false
			};

		case CLEAR_USERS:
			return {
				...state,
				users: [],
				searchAlertMsg: "",
				showClearBtn: false,
				loading: false
			};

		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false
			};

		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false
			};

		default:
			return state;
	}
};

export default GithubReducer;

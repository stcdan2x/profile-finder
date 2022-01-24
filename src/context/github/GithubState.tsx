import axios from "axios";
import { useReducer } from "react";
import { SEARCH_USERS, SET_LOADING, SET_SEARCH_MSG } from "../actionTypes";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props: any) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		searchAlertMsg: ""
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const findUser = async (textVal: string) => {
		//setLoading();
		dispatch({ type: SET_LOADING });

		const res = await axios.get(`https://api.github.com/search/users?q=${textVal}`);

		if (res.data.items.length > 0) {
			dispatch({
				type: SEARCH_USERS,
				payload: res.data.items,
				msg: ""
			});
		} else {
			dispatch({
				type: SET_SEARCH_MSG,
				msg: "No matches using you search criteria"
			});
		}
	};

	//const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchAlertMsg: state.searchAlertMsg,
				findUser
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

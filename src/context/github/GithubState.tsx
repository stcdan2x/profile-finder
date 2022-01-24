import axios from "axios";
import React, { useReducer } from "react";
import {
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	SEARCH_USERS,
	SET_LOADING,
	SET_SEARCH_MSG
} from "../actionTypes";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = ({ children }: { children: React.ReactNode }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		searchAlertMsg: "",
		showClearBtn: false
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
				showClearBtn: false,
				msg: "No matches using you search criteria"
			});
		}
	};

	const getUserDetails = async (username: string) => {
		dispatch({ type: SET_LOADING });

		const res = await axios.get(`https://api.github.com/users/${username}`);
		console.log(res.data);

		dispatch({
			type: GET_USER,
			payload: res.data
		});
	};

	const getUserRepos = async (username: string) => {
		dispatch({ type: SET_LOADING });

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
		);

		dispatch({ type: GET_REPOS, payload: res.data });
	};

	const clearSearchResults = () => {
		dispatch({ type: CLEAR_USERS });
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
				showClearBtn: state.showClearBtn,
				findUser,
				clearSearchResults,
				getUserDetails,
				getUserRepos
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubState;

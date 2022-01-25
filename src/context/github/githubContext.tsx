import { createContext } from "react";

interface user {
	id?: number;
	name?: string;
	avatar_url?: string;
	location?: string;
	bio?: string;
	blog?: string;
	login?: string;
	html_url?: string;
	followers?: string;
	following?: string;
	public_repos?: string;
	public_gists?: string;
	hireable?: boolean;
	company?: string;
}

interface repo {
	id: number;
	html_url: string;
	name: string;
}

interface githubContextTypes {
	users?: user[];
	user?: user;
	repos?: repo[];
	loading?: boolean;
	searchAlertMsg?: string;
	showClearBtn?: boolean;
	findUser?: () => void;
	clearSearchResults?: () => void;
	getUserDetails?: () => void;
	getUserRepos?: () => void;
}

const githubContext: githubContextTypes = createContext({
	users: [],
	user: {},
	repos: [],
	loading: false,
	searchAlertMsg: "",
	showClearBtn: false,
	findUser: () => {},
	clearSearchResults: () => {},
	getUserDetails: () => {},
	getUserRepos: () => {}
});

export default githubContext;

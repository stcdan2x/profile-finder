import { createContext } from "react";

export interface user {
	id: number;
	name: string;
	avatar_url: string;
	location: string;
	bio: string;
	blog: string;
	login: string;
	html_url: string;
	followers: string;
	following: string;
	public_repos: string;
	public_gists: string;
	hireable: boolean;
	company: string;
}

export interface repo {
	id: number;
	html_url: string;
	name: string;
}

export interface githubCOntextState {
	users: user[];
	user: user;
	repos: repo[];
	loading: boolean;
	searchAlertMsg: string;
	showClearBtn: boolean;
}

export interface githubContextTypes extends githubCOntextState {
	findUser: (text: string) => void;
	clearSearchResults: () => void;
	getUserDetails: (text: string) => void;
	getUserRepos: (text: string) => void;
}

const contextDefault: githubContextTypes = {
	users: [],
	user: {
		id: 0,
		name: "",
		avatar_url: "",
		location: "",
		bio: "",
		blog: "",
		login: "",
		html_url: "",
		followers: "",
		following: "",
		public_repos: "",
		public_gists: "",
		hireable: false,
		company: ""
	},
	repos: [],
	loading: false,
	searchAlertMsg: "",
	showClearBtn: false,
	findUser: (text) => {},
	clearSearchResults: () => {},
	getUserDetails: () => {},
	getUserRepos: () => {}
};

const githubContext = createContext(contextDefault);

export default githubContext;

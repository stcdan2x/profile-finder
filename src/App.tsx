import axios from "axios";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./components/elements/Search";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import About from "./components/pages/About";
import UserDetails from "./components/users/UserDetails";
import GithubState from "./context/github/GithubState";

export interface user {
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

export interface repo {
	id: number;
	html_url: string;
	name: string;
}

// interface AppState {
// 	user: user;
// 	users: user[];
// 	loading: boolean;
// 	searchAlertMsg: string;
// 	repos: repo[];
// }

const App = () => {
	const [user, setUser] = useState<user>({});
	const [users, setUsers] = useState<user[]>([]);
	const [loading, setLoading] = useState(false);
	const [searchAlertMsg, setSearchAlertMsg] = useState("");
	const [repos, setRepos] = useState<repo[]>([]);

	// const findUser = async (textVal: string) => {
	// 	setLoading(true);

	// 	const res = await axios.get(`https://api.github.com/search/users?q=${textVal}`);
	// 	console.log(res.data.items);

	// 	setUsers(res.data.items);
	// 	setLoading(false);

	// 	if (res.data.items.length > 0) {
	// 		setSearchAlertMsg("");
	// 	} else {
	// 		setSearchAlertMsg("No matches using you search criteria");
	// 	}
	// };

	const getUserDetails = async (username: string) => {
		setLoading(true);
		const res = await axios.get(`https://api.github.com/users/${username}`);
		console.log(res.data);

		setUser(res.data);
		setLoading(false);
	};

	const getUserRepos = async (username: string) => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
		);

		setRepos(res.data);
		setLoading(false);
	};

	const clearSearchResults = () => {
		setUsers([]);
		setLoading(false);
	};

	return (
		<GithubState>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search
											clearSearchResults={clearSearchResults}
											showClearBtn={users.length > 0 ? true : false}
										/>
										<User users={users} loading={loading} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:login"
								render={(props) => (
									<UserDetails
										{...props}
										getUserDetails={getUserDetails}
										getUserRepos={getUserRepos}
										user={user}
										repos={repos}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</GithubState>
	);
};

export default App;

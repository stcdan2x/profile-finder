import axios from "axios";
import { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Search from "./components/elements/Search";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import About from "./components/pages/About";
import UserDetails from "./components/users/UserDetails";

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

interface AppState {
	user: user;
	users: user[];
	loading: boolean;
	searchAlertMsg: string;
	repos: repo[];
}

class App extends Component {
	state: AppState = {
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
			hireable: true,
			company: ""
		},
		users: [],
		loading: false,
		searchAlertMsg: "",
		repos: []
	};

	/* async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get("https://api.github.com/users");

		this.setState({ users: res.data, loading: false });
	} */

	findUser = async (textVal: string) => {
		this.setState({ loading: true });
		/* this.setState({ searchAlertMsg: "" }); */

		const res = await axios.get(`https://api.github.com/search/users?q=${textVal}`);
		console.log(res.data.items);

		this.setState({ users: res.data.items, loading: false });

		if (res.data.items.length > 0) {
			this.setState({ searchAlertMsg: "" });
		} else {
			this.setState({ searchAlertMsg: "No matches using you search criteria" });
		}
	};

	getUserDetails = async (username: string) => {
		this.setState({ loading: true });
		const res = await axios.get(`https://api.github.com/users/${username}`);
		console.log(res.data);

		this.setState({ user: res.data, loading: false });
	};

	getUserRepos = async (username: string) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
		);
		console.log(res.data);

		this.setState({ repos: res.data, loading: false });
	};

	clearSearchResults = () => {
		this.setState({ users: [], loading: false });
	};

	render() {
		return (
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
											findUser={this.findUser}
											clearSearchResults={this.clearSearchResults}
											loading={this.state.loading}
											showClearBtn={this.state.users.length > 0 ? true : false}
											searchAlertMsg={this.state.searchAlertMsg}
										/>
										<User users={this.state.users} loading={this.state.loading} />
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
										getUserDetails={this.getUserDetails}
										getUserRepos={this.getUserRepos}
										user={this.state.user}
										repos={this.state.repos}
										loading={this.state.loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

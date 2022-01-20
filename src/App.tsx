import axios from "axios";
import { Component } from "react";
import "./App.scss";
import Search from "./components/elements/Search";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";

interface user {
	id: string;
	login: string;
	avatar_url: string;
	html_url: string;
}

interface AppState {
	users: user[];
	loading: boolean;
	searchAlertMsg: string;
}

class App extends Component {
	state: AppState = {
		users: [],
		loading: false,
		searchAlertMsg: ""
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

	clearSearchResults = () => {
		this.setState({ users: [], loading: false });
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search
						findUser={this.findUser}
						clearSearchResults={this.clearSearchResults}
						loading={this.state.loading}
						showClearBtn={this.state.users.length > 0 ? true : false}
						searchAlertMsg={this.state.searchAlertMsg}
					/>
					<User users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;

import axios from "axios";
import { Component } from "react";
import "./App.css";
import Search from "./components/elements/Search";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	/* async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get("https://api.github.com/users");

		this.setState({ users: res.data, loading: false });
	} */

	findUser = async (textVal) => {
		this.setState({ loading: true });

		const res = await axios.get(`https://api.github.com/search/users?q=${textVal}`);
		console.log(res.data.items);

		this.setState({ users: res.data.items, loading: false });
	};

	clearSearchResults = () => this.setState({ users: [], loading: false });

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search
						users={this.state.users}
						findUser={this.findUser}
						clearSearchResults={this.clearSearchResults}
						loading={this.state.loading}
						showClearBtn={this.state.users.length > 0 ? true : false}
					/>
					<User users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;

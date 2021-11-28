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

	async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get("https://api.github.com/users");

		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search />
					<User users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;

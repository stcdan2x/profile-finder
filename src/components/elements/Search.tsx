import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Message from "./Message";

interface SearchProps {
	findUser: (text: string) => void;
	clearSearchResults: () => void;
	loading: boolean;
	showClearBtn: boolean;
	searchAlertMsg: string;
}

interface SearchState {
	text: string;
	message: string;
	searchEmpty: string;
}

class Search extends Component<SearchProps> {
	state: SearchState = {
		text: "",
		message: "",
		searchEmpty: ""
	};

	static propTypes = {
		findUser: PropTypes.func.isRequired,
		clearSearchResults: PropTypes.func.isRequired,
		loading: PropTypes.bool.isRequired,
		showClearBtn: PropTypes.bool.isRequired,
		searchAlertMsg: PropTypes.string.isRequired
	};

	componentDidMount() {
		this.setState({ searchEmpty: "" });
	}

	changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// showMsg = async () => {
	// 	if (this.props.loading === false) {
	// 		if (this.props.users) {
	// 			await this.setState({ searchEmpty: "going" });

	// 			console.log(this.props.users);
	// 			console.log("yes");
	// 		} else {
	// 			await this.setState({ searchEmpty: "No matches found!" });

	// 			console.log(this.props.users);
	// 			console.log("no");
	// 		}
	// 	}
	// };

	submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!this.state.text) {
			this.setState({ message: "Please type-in your search criteria!" });
			return;
		} else {
			this.props.findUser(this.state.text);
			this.setState({ text: "", message: "" });
		}
	};

	render() {
		return (
			<div>
				{this.props.loading ? (
					<Loader />
				) : (
					<div>
						{this.state.message && (
							<Message variant="notifier warning">{this.state.message}</Message>
						)}
						{this.props.searchAlertMsg && (
							<div className="notifier warning">{this.props.searchAlertMsg}</div>
						)}
						<form className="form" onSubmit={this.submitHandler}>
							<input
								type="text"
								placeholder="Search User"
								name="text"
								value={this.state.text}
								onChange={this.changeHandler}
							/>
							<input type="submit" value="Search" className="btn btn-dark btn-block" />
						</form>

						{this.props.showClearBtn && (
							<button
								className="btn btn-light btn-block"
								onClick={this.props.clearSearchResults}>
								Clear
							</button>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Search;

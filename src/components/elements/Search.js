import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
	state = {
		text: "",
		message: "",
		searchEmpty: ""
	};

	static propTypes = {
		findUser: PropTypes.func.isRequired,
		clearSearchResults: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.setState({ searchEmpty: "" });
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	/* showMsg = async () => {
		if (this.props.loading === false) {
			if (this.props.users) {
				await this.setState({ searchEmpty: "going" });

				console.log(this.props.users);
				console.log("yes");
			} else {
				await this.setState({ searchEmpty: "No matches found!" });

				console.log(this.props.users);
				console.log("no");
			}
		}
	}; */

	submitHandler = (e) => {
		e.preventDefault();

		if (!this.state.text) {
			this.setState({ message: "Please type-in your search criteria!" });
			return;
		} else {
			this.props.findUser(this.state.text);
			this.setState({ text: "", message: "" });
			if (this.props.loading === false) {
				if (this.props.users > 0) {
					this.setState({ searchEmpty: "going" });
				} else if (!this.props.users) {
					this.setState({ searchEmpty: "No matches found!" });
				}
			}
		}
	};

	render() {
		return (
			<div>
				{this.state.message && <div className="notifier warning">{this.state.message}</div>}
				{this.state.searchEmpty && (
					<div className="notifier warning">{this.state.searchEmpty}</div>
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
				<button className="btn btn-light btn-block" onClick={this.props.clearSearchResults}>
					Clear
				</button>
			</div>
		);
	}
}

export default Search;

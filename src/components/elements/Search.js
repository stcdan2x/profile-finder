import React, { Component } from "react";

class Search extends Component {
	state = {
		text: ""
	};

	onChangeHandler = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<div>
				<form className="form">
					<input
						type="text"
						placeholder="Search User"
						name="text"
						value={this.state.text}
						onChange={this.onChangeHandler}
					/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
			</div>
		);
	}
}

export default Search;

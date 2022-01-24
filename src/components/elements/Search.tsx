import React, { useContext, useState } from "react";
import Message from "./Message";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!text) {
			setMessage("Please type-in your search criteria!");
			return;
		} else {
			githubContext.findUser(text);
			setText("");
			setMessage("");
		}
	};

	return (
		<div className="full-w">
			{message && <Message variant="notifier warning">{message}</Message>}
			{githubContext.searchAlertMsg && (
				<div className="notifier warning">{githubContext.searchAlertMsg}</div>
			)}
			<form className="form" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Search User"
					name="text"
					value={text}
					onChange={changeHandler}
				/>
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>

			{githubContext.showClearBtn && (
				<button className="btn btn-light btn-block" onClick={githubContext.clearSearchResults}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;

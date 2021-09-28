import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import UserItem from "./UserItem";

class User extends Component {
	state = {
		users: [
			{
				login: "mojombo",
				id: "01",
				url: "https://api.github.com/users/mojombo",
				html_url: "https://github.com/mojombo",
				avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
			},
			{
				login: "wycats",
				id: "02",
				url: "https://api.github.com/users/wycats",
				html_url: "https://github.com/wycats",
				avatar_url: "https://avatars.githubusercontent.com/u/4?v=4"
			}
		]
	};

	render() {
		return (
			<Fragment>
				{this.state.users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</Fragment>
		);
	}
}

export default User;

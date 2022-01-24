import React, { Fragment } from "react";
import Loader from "../elements/Loader";
import PropTypes from "prop-types";

import UserItem from "./UserItem";

interface UserProps {
	users: { id: number; login: string; avatar_url: string; html_url: string }[];
	loading: boolean;
}

const User = ({ users, loading }: UserProps) => {
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<div style={collectionStyle}>
					{users.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			)}
		</Fragment>
	);
};

User.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

const collectionStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
	gridGap: "0.5rem"
};

export default User;

import { Fragment, useContext } from "react";
import Loader from "../elements/Loader";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";
// import PropTypes from "prop-types";
//import { user } from "../../App";

// interface UserProps {
// 	users: user[];
// 	loading: boolean;
// }

const User = () => {
	const githubContext = useContext(GithubContext);

	return (
		<Fragment>
			{githubContext.loading ? (
				<Loader />
			) : (
				<div style={collectionStyle}>
					{githubContext.users.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</div>
			)}
		</Fragment>
	);
};

// User.propTypes = {
// 	users: PropTypes.array.isRequired,
// 	loading: PropTypes.bool.isRequired
// };

const collectionStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
	gridGap: "0.5rem"
};

export default User;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { user } from "../../App";

interface UserItemProps {
	user: user;
}

const UserItem = ({ user }: UserItemProps) => {
	return (
		<div className="card text-center">
			<img src={user.avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
			<h3>{user.login}</h3>
			<div>
				<Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;

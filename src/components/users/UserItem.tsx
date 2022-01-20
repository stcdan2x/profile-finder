import PropTypes from "prop-types";

interface UserItemProps {
	user: {
		id: string;
		login: string;
		avatar_url: string;
		html_url: string;
	};
}

const UserItem = ({ user: { login, avatar_url, html_url } }: UserItemProps) => {
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;

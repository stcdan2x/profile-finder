import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "Profile Lookup",
	icon: "fas fa-user-circle"
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;

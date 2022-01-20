import PropTypes from "prop-types";

interface NavBarProps {
	icon: string;
	title: string;
}

const Navbar = ({ icon, title }: NavBarProps) => {
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

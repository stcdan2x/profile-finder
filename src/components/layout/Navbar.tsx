import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface NavBarProps {
	icon: string;
	title: string;
}

const Navbar = ({ icon, title }: NavBarProps) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<Link to="/">
					<i className={icon} /> {title}
				</Link>
			</h1>
			<div className="nav_menu">
				<p>
					<Link to={"/about"}>About</Link>
				</p>
			</div>
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

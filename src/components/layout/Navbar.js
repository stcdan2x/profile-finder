const Navbar = ({ icon, title }) => {
	Navbar.defaultProps = {
		title: "Profile Finder",
		icon: "fas fa-user-circle"
	};
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
		</nav>
	);
};

export default Navbar;

import Search from "../elements/Search";
import User from "../users/User";

// interface user {
// 	id: string;
// 	login: string;
// 	avatar_url: string;
// 	html_url: string;
// }

// interface HomeProps {
// 	users: user[];
// 	loading: boolean;
// 	searchAlertMsg: string;
// 	findUser: () => void;
// 	clearSearchResults: () => void;
// }

const Home = () => {
	return (
		<>
			<Search />
			<User />
		</>
	);
};

export default Home;

import React from "react";
import Loader from "../elements/Loader";
import Search from "../elements/Search";
import User from "../users/User";

interface user {
	id: string;
	login: string;
	avatar_url: string;
	html_url: string;
}

interface HomeProps {
	users: user[];
	loading: boolean;
	searchAlertMsg: string;
	findUser: () => void;
	clearSearchResults: () => void;
}

const Home = ({ findUser, clearSearchResults, loading, users, searchAlertMsg }: HomeProps) => {
	// console.log(users);
	// return (
	// 	<>
	// 		{loading ? (
	// 			<Loader />
	// 		) : (
	// 			<>
	// 				<Search
	// 					findUser={findUser}
	// 					clearSearchResults={clearSearchResults}
	// 					loading={loading}
	// 					showClearBtn={users.length > 0 ? true : false}
	// 					searchAlertMsg={searchAlertMsg}
	// 				/>
	// 				<User users={users} loading={loading} />
	// 			</>
	// 		)}
	// 	</>
	// );
};

export default Home;

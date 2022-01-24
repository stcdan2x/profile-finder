import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import UserDetails from "./components/users/UserDetails";
import GithubState from "./context/github/GithubState";

export interface user {
	id?: number;
	name?: string;
	avatar_url?: string;
	location?: string;
	bio?: string;
	blog?: string;
	login?: string;
	html_url?: string;
	followers?: string;
	following?: string;
	public_repos?: string;
	public_gists?: string;
	hireable?: boolean;
	company?: string;
}

export interface repo {
	id: number;
	html_url: string;
	name: string;
}

// interface AppState {
// 	user: user;
// 	users: user[];
// 	loading: boolean;
// 	searchAlertMsg: string;
// 	repos: repo[];
// }

const App = () => {
	// const [user, setUser] = useState<user>({});
	// const [users, setUsers] = useState<user[]>([]);
	// const [loading, setLoading] = useState(false);
	// const [repos, setRepos] = useState<repo[]>([]);

	// const findUser = async (textVal: string) => {
	// 	setLoading(true);

	// 	const res = await axios.get(`https://api.github.com/search/users?q=${textVal}`);
	// 	console.log(res.data.items);

	// 	setUsers(res.data.items);
	// 	setLoading(false);

	// 	if (res.data.items.length > 0) {
	// 		setSearchAlertMsg("");
	// 	} else {
	// 		setSearchAlertMsg("No matches using you search criteria");
	// 	}
	// };

	// const getUserRepos = async (username: string) => {
	// 	setLoading(true);

	// 	const res = await axios.get(
	// 		`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
	// 	);

	// 	setRepos(res.data);
	// 	setLoading(false);
	// };

	return (
		<GithubState>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={UserDetails} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</GithubState>
	);
};

export default App;

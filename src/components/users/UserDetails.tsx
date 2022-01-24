import { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import Loader from "../elements/Loader";
import Repos from "./Repos";

interface MParams {
	login: string;
}

interface UserDetailsProps extends RouteComponentProps<MParams> {}

const UserDetails = ({ match }: UserDetailsProps) => {
	const githubContext = useContext(GithubContext);

	useEffect(() => {
		githubContext.getUserRepos(match.params.login);
		githubContext.getUserDetails(match.params.login);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [match.params.login]);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
		company
	} = githubContext.user;

	return githubContext.loading ? (
		<Loader />
	) : (
		<>
			<Link to="/" className="btn btn-light">
				Back To Search
			</Link>
			Hireable:{" "}
			{hireable ? (
				<i className="fas fa-check text-success" />
			) : (
				<i className="fas fa-times-circle text-danger" />
			)}
			<div className="card grid-2">
				<div className="all-center">
					<img src={avatar_url} className="round-img" alt="" style={{ width: "150px" }} />
					<h1>{name}</h1>
					{location && <p>Location: {location}</p>}
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className="btn btn-dark my-1">
						Visit Github Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong> {login}
								</Fragment>
							)}
						</li>

						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>
							)}
						</li>

						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-light">Public Repos: {public_repos}</div>
				<div className="badge badge-dark">Public Gists: {public_gists}</div>
			</div>
			<Repos />
		</>
	);
};

export default UserDetails;

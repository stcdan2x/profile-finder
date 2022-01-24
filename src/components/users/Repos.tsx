import { useContext } from "react";
import GithubContext, { repo } from "../../context/github/githubContext";
import RepoItems from "./RepoItems";

// interface ReposProps {
// 	repos: repo[];
// }

const Repos = () => {
	const githubContext = useContext(GithubContext);

	const repos: repo[] = githubContext.repos;

	return (
		<>
			{repos.map((repo) => (
				<RepoItems repo={repo} key={repo.id} />
			))}
		</>
	);
};

export default Repos;

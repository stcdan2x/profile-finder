import React from "react";
import { repo } from "../../App";
import RepoItems from "./RepoItems";

interface ReposProps {
	repos: repo[];
}

const Repos = ({ repos }: ReposProps) => {
	return (
		<>
			{repos.map((repo) => (
				<RepoItems repo={repo} key={repo.id} />
			))}
		</>
	);
};

export default Repos;

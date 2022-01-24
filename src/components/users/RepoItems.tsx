import React from "react";
import { repo } from "../../App";

interface RepoItemsProps {
	repo: repo;
}

const RepoItems = ({ repo }: RepoItemsProps) => {
	return (
		<div className="card">
			<h3>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
		</div>
	);
};

export default RepoItems;

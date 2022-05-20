import { useState } from "react";
import "../styles/Search.scss";
import SearchResult from "./SearchResult";

export default function Search() {
	const [search, setSearch] = useState("");

	const [results, setResults] = useState([]);

	const maxChars = 175;

	const handleSearch = async (event) => {
		event.preventDefault();

		const url = `https://en.wikivoyage.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=pageimages|extracts&piprop=original&exchars=${maxChars}&exinfo=true&explaintext&exsectionformat=plain&exlimit=1&format=json&origin=*`;

		if (search !== "") {
			const response = await fetch(url);

			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}
			const json = await response.json();
			const pagesObj = await json.query.pages;
			const pages = Object.values(pagesObj);

			const data = [];

			for (let page of pages) {
				data.push(page);
			}

			setResults(data);
		}
	};

	return (
		<main>
			<h2 className="title">Search</h2>
			<form onSubmit={handleSearch}>
				<input
					type="search"
					minLength="3"
					maxLength="20"
					required
					aria-label="Insert your search term"
					value={search}
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				></input>
			</form>

			<section className="results grid--auto-fit">
				{results &&
					results.map((result, i) => {
						return (
							<div key={i}>
								{result.original && (
									<SearchResult
										title={result.title}
										extract={result.extract}
										imgSrc={result.original.source}
									/>
								)}
							</div>
						);
					})}
			</section>
		</main>
	);
}

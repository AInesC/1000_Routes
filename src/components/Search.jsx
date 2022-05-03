import { useState } from "react";
import "../styles/Search.scss";
import SearchResult from "./SearchResult";

export default function Search() {
	const [search, setSearch] = useState("");

	const [results, setResults] = useState([]);

	const maxChars = 175;

	const handleSearch = async (event) => {
		event.preventDefault();

		const url = `http://en.wikivoyage.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=extracts&exchars=${maxChars}&exinfo=true&explaintext&exsectionformat=plain&exlimit=max&format=json&origin=*`;

		if (search !== "") {
			const response = await fetch(url);
			const json = await response.json();
			const pagesObj = await json.query.pages;

			const pages = Object.values(pagesObj);

			console.log(pages);

			const data = [];

			for (let page of pages) {
				data.push(page);
			}

			setResults(data);
		}
	};

	return (
		<main>
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
							<SearchResult
								key={i}
								title={result.title}
								extract={result.extract}
							/>
						);
					})}
			</section>
		</main>
	);
}

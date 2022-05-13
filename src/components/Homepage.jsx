import { useState } from "react";
import "../styles/Homepage.scss";
import Suggestions from "./Suggestions";

export default function Homepage() {
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");
	const [status, setStatus] = useState("");
	const [suggestions, setSuggestions] = useState("");

	async function getSuggestions() {
		const url = `https://en.wikipedia.org/w/api.php?action=query&prop=coordinates|pageimages|description|info&inprop=url&piprop=original&generator=geosearch&ggsradius=10000&ggslimit=10&ggscoord=${latitude}|${longitude}&format=json&origin=*`;

		const response = await fetch(url);

		if (!response.ok) {
			setStatus(`An error has occured: ${response.status}`);
		}
		const json = await response.json();
		const pagesObj = await json.query.pages;
		const pages = Object.values(pagesObj);

		console.log("pages", pages);

		const data = [];

		for (let page of pages) {
			data.push(page);
		}

		if (data) {
			setSuggestions(data);
		} else {
			setStatus("An error has occured, please try again.");
		}
	}

	function getCoordinates() {
		if (navigator.geolocation) {
			setStatus("Loading...");
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			setStatus("Geolocation is not supported by this browser.");
		}
	}

	function error() {
		setStatus("Unable to retrieve your location");
	}

	function success(position) {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);

		if (latitude && longitude) {
			getSuggestions();
		}
	}

	return (
		<main>
			<section className="hero">
				<div className="veil">
					<h2 className="hero__title">Are you ready to start the journey?</h2>
					<svg
						className="down"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z" />
					</svg>
				</div>
			</section>
			<section aria-labelledby="nearby" className="places-near">
				<div className="row">
					<h2 id="nearby" className="places-near__title">
						Based on your location...
					</h2>
					<button onClick={getCoordinates} className="places-near__btn">
						Get your location
					</button>
				</div>
				<div>
					<p>Latitude: {latitude}</p>
					<p>Longitude: {longitude}</p>
				</div>
				<div className="grid--auto-fit">
					{suggestions ? (
						suggestions.map((suggestion, i) => {
							return (
								<div key={i}>
									{suggestion.original && (
										<Suggestions
											title={suggestion.title}
											imgSrc={suggestion.original.source}
											fullUrl={suggestion.fullurl}
										/>
									)}
								</div>
							);
						})
					) : (
						<p>{status}</p>
					)}
				</div>
			</section>
		</main>
	);
}

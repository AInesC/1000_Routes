import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Suggestions from "./Suggestions";
import "../styles/Homepage.scss";

export default function Homepage() {
	const DEFAULT_LATITUDE = 38.725267;
	const DEFAULT_LONGITUDE = -9.150019;
	const location = [DEFAULT_LATITUDE, DEFAULT_LONGITUDE];
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");
	const [status, setStatus] = useState("");
	const [suggestions, setSuggestions] = useState("");

	// FETCH DATA FROM WIKIMEDIA API
	async function getSuggestions(latitude, longitude) {
		const url = `https://en.wikipedia.org/w/api.php?action=query&prop=coordinates|pageimages|description|info&inprop=url&piprop=original&generator=geosearch&ggsradius=10000&ggslimit=12&ggscoord=${latitude}|${longitude}&format=json&origin=*`;

		const response = await fetch(url);

		if (!response.ok) {
			setStatus(`An error has occured: ${response.status}`);
		}
		const json = await response.json();
		const pagesObj = await json.query;
		if (pagesObj && pagesObj.hasOwnProperty("pages")) {
			const pages = Object.values(pagesObj.pages);

			const data = [];

			for (let page of pages) {
				data.push(page);
			}

			setSuggestions(data);
		}
	}

	// GET COODINATES FROM GEOLOCATION API
	function getCoordinates() {
		if (navigator.geolocation) {
			setStatus("Loading...");
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			setStatus("Geolocation is not supported by this browser.");
		}
	}

	// ERROR HANDLING
	function error() {
		setStatus("Unable to retrieve your location");
	}

	// UPDATING STATE
	function success(position) {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	}

	useEffect(() => {
		getSuggestions(latitude, longitude);
	}, [latitude, longitude]);

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
			<div className="fill"></div>
			<section aria-labelledby="nearby" className="places-near">
				<div className="row">
					<h2 id="nearby" className="places-near__title">
						Based on your location...
					</h2>
					<button onClick={getCoordinates} className="places-near__button btn">
						Get your location
					</button>
				</div>
				{suggestions && (
					<div className="map">
						<MapContainer
							center={[latitude, longitude]}
							zoom={12}
							scrollWheelZoom={false}
						>
							<TileLayer
								attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							{suggestions ? (
								suggestions.map((suggestion, i) => {
									if (suggestion.coordinates) {
										return (
											<Marker
												key={i}
												position={[
													suggestion.coordinates[0].lat,
													suggestion.coordinates[0].lon,
												]}
											>
												<Popup className="popup">
													<h3 className="popup__title">{suggestion.title}</h3>
													{suggestion.original && (
														<img
															className="popup__image"
															src={suggestion.original.source}
															alt=""
														/>
													)}
													<p>{suggestion.description}</p>
												</Popup>
											</Marker>
										);
									}
								})
							) : (
								<Marker position={location}>
									<Popup>You are here</Popup>
								</Marker>
							)}
						</MapContainer>
					</div>
				)}
				<div className="grid--auto-fit suggestions">
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

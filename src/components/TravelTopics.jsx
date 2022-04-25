import "../styles/TravelTopics.scss";

export default function TravelTopics() {
	const topics = [
		{
			title: "Food and Drink",
			imageS: "/images/travel-topics/food.jpg",
			imageL: "/images/travel-topics/foodL.jpg",
			link: "https://en.wikivoyage.org/wiki/Food_and_drink",
			linkInfo: "Go to WikiVoyage food and drink page",
		},
		{
			title: "Natural Wonders",
			imageS: "/images/travel-topics/nature.jpg",
			imageL: "/images/travel-topics/natureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Natural_attractions",
			linkInfo: "Go to WikiVoyage natural wonders page",
		},
		{
			title: "Cultural Attractions",
			imageS: "/images/travel-topics/culture.jpg",
			imageL: "/images/travel-topics/cultureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Cultural_attractions",
			linkInfo: "Go to WikiVoyage cultural attractions page",
		},
		{
			title: "Activities",
			imageS: "/images/travel-topics/activities.jpg",
			imageL: "/images/travel-topics/activitiesL.jpg",
			link: "https://en.wikivoyage.org/wiki/Activities",
			linkInfo: "Go to WikiVoyage activities page",
		},
	];

	return (
		<main className="travel-topics">
			<div className="travel-topics__carrousel">
				<button
					type="button"
					id="previous"
					className="btn btn--previous"
					title="Show previous image"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
					</svg>
				</button>

				<img id="topics-img" src="/images/travel-topics/food.jpg" alt="" />
				<button
					type="button"
					id="next"
					className="btn btn--next"
					title="Show next image"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
					</svg>
				</button>
				<h2 className="travel-topics__title">
					<a
						id="topics-link"
						href="https://en.wikivoyage.org/wiki/Food_and_drink"
						title="Go to WikiVoyage food and drink page"
					>
						Food and Drink
					</a>
				</h2>
				<p className="travel-topics__phrase">
					Taste some local specialities while travelling...
				</p>
			</div>
		</main>
	);
}

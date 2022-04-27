import { useEffect } from "react";
import "../styles/TravelTopics.scss";

export default function TravelTopics() {
	const topics = [
		{
			title: "Food and Drink",
			text: "Taste some local specialities while travelling..",
			imageS: "/images/travel-topics/food.jpg",
			imageL: "/images/travel-topics/foodL.jpg",
			link: "https://en.wikivoyage.org/wiki/Food_and_drink",
			linkInfo: "Go to WikiVoyage food and drink page",
		},
		{
			title: "Natural Wonders",
			text: "Explore Nature's marvelous gifts!",
			imageS: "/images/travel-topics/nature.jpg",
			imageL: "/images/travel-topics/natureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Natural_attractions",
			linkInfo: "Go to WikiVoyage natural wonders page",
		},
		{
			title: "Cultural Attractions",
			text: "Immerse yourself in different cultures...",
			imageS: "/images/travel-topics/culture.jpg",
			imageL: "/images/travel-topics/cultureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Cultural_attractions",
			linkInfo: "Go to WikiVoyage cultural attractions page",
		},
		{
			title: "Activities",
			text: "Go on and adventure...",
			imageS: "/images/travel-topics/activities.jpg",
			imageL: "/images/travel-topics/activitiesL.jpg",
			link: "https://en.wikivoyage.org/wiki/Activities",
			linkInfo: "Go to WikiVoyage activities page",
		},
	];

	const imageSrc = document.getElementById("carrousel-image");
	const next = document.getElementById("next");
	const previous = document.getElementById("previous");
	const topicsLink = document.getElementById("topics-link");
	const topicsText = document.getElementById("topics-text");

	let i = 0;

	const max = topics.length - 1;

	function changeContent(i) {
		imageSrc.srcset = topics[i].imageL;
		imageSrc.src = topics[i].imageS;

		topicsLink.href = topics[i].link;
		topicsLink.title = topics[i].linkInfo;
		topicsLink.textContent = topics[i].title;

		topicsText.textContent = topics[i].text;
	}

	function nextImage() {
		i++;

		if (i > max) {
			i = 0;
		}

		changeContent(i);
	}

	function previousImage() {
		i--;

		if (i < 0) {
			i = max;
		}

		changeContent(i);
	}

	useEffect(() => {}, []);

	useEffect(() => {
		const timer = setInterval(nextImage, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<main className="travel-topics">
			<div className="travel-topics__carrousel">
				<button
					type="button"
					id="previous"
					className="btn btn--previous"
					title="Show previous image"
					onClick={previousImage}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
					</svg>
				</button>
				<img
					id="carrousel-image"
					srcset="/images/travel-topics/foodL.jpg 641w"
					src="/images/travel-topics/food.jpg"
					alt=""
				/>
				<button
					type="button"
					id="next"
					className="btn btn--next"
					title="Show next image"
					onClick={nextImage}
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
				<p className="travel-topics__phrase" id="topics-text">
					Taste some local specialities while travelling...
				</p>
			</div>
		</main>
	);
}

import { useEffect, useState } from "react";
import "../styles/TravelTopics.scss";
import Slide from "./Slide";

export default function TravelTopics() {
	const topics = [
		{
			index: 0,
			title: "Food and Drink",
			text: "Taste some local specialities while travelling..",
			imageS: "/images/travel-topics/food.jpg",
			imageL: "/images/travel-topics/foodL.jpg",
			link: "https://en.wikivoyage.org/wiki/Food_and_drink",
			linkInfo: "Go to WikiVoyage food and drink page",
		},
		{
			index: 1,
			title: "Natural Wonders",
			text: "Explore Nature's marvelous gifts!",
			imageS: "/images/travel-topics/nature.jpg",
			imageL: "/images/travel-topics/natureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Natural_attractions",
			linkInfo: "Go to WikiVoyage natural wonders page",
		},
		{
			index: 2,
			title: "Cultural Attractions",
			text: "Immerse yourself in different cultures...",
			imageS: "/images/travel-topics/culture.jpg",
			imageL: "/images/travel-topics/cultureL.jpg",
			link: "https://en.wikivoyage.org/wiki/Cultural_attractions",
			linkInfo: "Go to WikiVoyage cultural attractions page",
		},
		{
			index: 3,
			title: "Activities",
			text: "Go on an adventure...",
			imageS: "/images/travel-topics/activities.jpg",
			imageL: "/images/travel-topics/activitiesL.jpg",
			link: "https://en.wikivoyage.org/wiki/Activities",
			linkInfo: "Go to WikiVoyage activities page",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const max = topics.length - 1;

	function nextSlide() {
		setCurrentSlide((prevcurrentSlide) =>
			prevcurrentSlide === max ? 0 : prevcurrentSlide + 1
		);
	}

	function previousSlide() {
		setCurrentSlide((prevcurrentSlide) =>
			prevcurrentSlide === 0 ? max : prevcurrentSlide - 1
		);
	}

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<main className="travel-topics">
			<div className="wrapper">
				{topics.map((topic, i) => {
					return (
						<div
							key={i}
							className={
								currentSlide === i
									? "travel-topics__carrousel"
									: "travel-topics__carrousel hide"
							}
						>
							<button
								type="button"
								id="previous"
								className="btn btn--previous"
								title="Show previous image"
								onClick={previousSlide}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
								</svg>
							</button>
							<img
								id="carrousel-image"
								srcSet={topic.imageL + " 641w"}
								src={topic.imageS}
								alt=""
							/>
							<button
								type="button"
								id="next"
								className="btn btn--next"
								title="Show next image"
								onClick={nextSlide}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
								</svg>
							</button>
							<h3 className="travel-topics__title">
								<a href={topic.link} title={topic.linkInfo}>
									{topic.title}
								</a>
							</h3>
							<p className="travel-topics__phrase" id="topics-text">
								{topic.text}
							</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}

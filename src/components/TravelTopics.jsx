import { useEffect, useState } from "react";
import "../styles/TravelTopics.scss";
import Slide from "./Slide";

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
			text: "Go on an adventure...",
			imageS: "/images/travel-topics/activities.jpg",
			imageL: "/images/travel-topics/activitiesL.jpg",
			link: "https://en.wikivoyage.org/wiki/Activities",
			linkInfo: "Go to WikiVoyage activities page",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	function nextSlide() {
		setCurrentSlide(currentSlide++);

		if (currentSlide === topics.lenght) {
			setCurrentSlide(0);
		}
	}

	function previousSlide() {
		setCurrentSlide(currentSlide--);

		if (currentSlide < 0) {
			setCurrentSlide(topics.lenght - 1);
		}
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
						<Slide
							key={i}
							title={topic.title}
							text={topic.text}
							imageS={topic.imageS}
							imageL={topic.imageL}
							link={topic.link}
							linkInfo={topic.linkInfo}
							previousSlide={previousSlide}
							nextSlide={nextSlide}
						/>
					);
				})}
			</div>
		</main>
	);
}

import "../styles/Explore.scss";
import ExploreCard from "./ExploreCard";

export default function Explore() {
	const continents = [
		{
			id: 1,
			name: "Africa",
			phrase:
				"From the desert and the savannah to the jungle, the force of nature is everpresent.",
			imgSrc: "/images/explore/africa.jpg",
			link: "https://en.wikivoyage.org/wiki/Africa_itineraries",
			linkInfo: "Go to WikiVoyage Africa itineraries page",
		},
		{
			id: 2,
			name: "Asia",
			phrase:
				"Diverse cultures, bustling cities and vibrant colors, Asia is full of magic.",
			imgSrc: "/images/explore/asia.jpg",
			link: "https://en.wikivoyage.org/wiki/Asia_itineraries",
			linkInfo: "Go to WikiVoyage Asia itineraries page",
		},
		{
			id: 3,
			name: "Europe",
			phrase:
				"Romantic streets, buildings full of history, iconic railroads and art all over.",
			imgSrc: "/images/explore/europe.jpg",
			link: "https://en.wikivoyage.org/wiki/Europe_itineraries",
			linkInfo: "Go to WikiVoyage Europe itineraries page",
		},
		{
			id: 4,
			name: "North America",
			phrase:
				"Long open roads, cities that never sleep and land to loose sight.",
			imgSrc: "/images/explore/northAmerica.jpg",
			link: "https://en.wikivoyage.org/wiki/North_America_itineraries",
			linkInfo: "Go to WikiVoyage North America itineraries page",
		},
		{
			id: 5,
			name: "Oceania",
			phrase:
				"Ocean all around and lands full of wonders and secrets to uncover.",
			imgSrc: "/images/explore/oceania.jpg",
			link: "https://en.wikivoyage.org/wiki/Oceania_itineraries",
			linkInfo: "Go to WikiVoyage Oceania itineraries page",
		},
		{
			id: 6,
			name: "South America",
			phrase:
				"Lost civilizations and landscapes as diverse as its passionate people.",
			imgSrc: "/images/explore/southAmerica.jpg",
			link: "https://en.wikivoyage.org/wiki/South_America_itineraries",
			linkInfo: "Go to WikiVoyage South America itineraries page",
		},
	];

	return (
		<main className="explore">
			<h2 className="explore__title">Explore</h2>
			<p className="explore__description">
				Plan your new adventure with our selection of itineraries, divided by
				continent.
			</p>
			<div className="explore__grid grid--auto-fit">
				{continents.map((continent) => (
					<ExploreCard
						key={continent.id}
						name={continent.name}
						phrase={continent.phrase}
						imgSrc={continent.imgSrc}
						link={continent.link}
						linkInfo={continent.linkInfo}
					/>
				))}
			</div>
		</main>
	);
}

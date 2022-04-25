import "../styles/Explore.scss";
import ExploreCard from "./ExploreCard";

export default function Explore() {
	const continents = [
		{
			id: 1,
			name: "Africa",
			phrase: "",
			imgSrc: "/images/explore/africa.jpg",
		},
		{
			id: 2,
			name: "Asia",
			phrase: "",
			imgSrc: "/images/explore/asia.jpg",
		},
		{
			id: 3,
			name: "Europe",
			phrase: "",
			imgSrc: "/images/explore/europe.jpg",
		},
		{
			id: 4,
			name: "North America",
			phrase: "",
			imgSrc: "/images/explore/northAmerica.jpg",
		},
		{
			id: 5,
			name: "Oceania",
			phrase: "",
			imgSrc: "/images/explore/oceania.jpg",
		},
		{
			id: 6,
			name: "South America",
			phrase: "",
			imgSrc: "/images/explore/southAmerica.jpg",
		},
	];

	return (
		<main className="explore">
			<h2 className="explore__title">Explore</h2>
			<div className="explore__grid grid--auto-fit">
				{continents.map((continent) => (
					<ExploreCard
						key={continent.id}
						name={continent.name}
						phrase={continent.phrase}
						imgSrc={continent.imgSrc}
					/>
				))}
			</div>
		</main>
	);
}

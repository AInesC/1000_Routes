import "../styles/About.scss";

export default function About() {
	return (
		<main className="about">
			<div className="veil">
				<h2 className="about__title">Our Goal</h2>
				<div className="about__text">
					<p className="about__description">
						We believe information should be available for free to everyone, as
						a basic human right. Therefore, our purpose is to provide quality
						and informative guides to travelers, while maintaining privacy and
						anonymity.
					</p>
					<p className="about__description">
						Our website does not store any information about the user. You are
						free to share your geolocation to receive suggestions near you.
					</p>
				</div>
			</div>
		</main>
	);
}

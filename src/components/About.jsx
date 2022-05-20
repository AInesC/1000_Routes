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
						Our website does not store any information about the users. You may
						choose to share your geolocation to receive suggestions of
						destinations near you.
					</p>
					<p className="about__description">
						<strong>DISCLAIMER: </strong>
						<em>
							This website uses text and photos from Wikipedia, Wikivoyage and
							WikiCommons and redirects users to some of their pages. This is a
							personal project and is not meant for commercial use. We are not
							affiliated with the Wikimedia group.
						</em>
					</p>
				</div>
			</div>
		</main>
	);
}

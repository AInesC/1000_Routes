export default function ExploreCard(props) {
	return (
		<div className="explore-card card">
			<img
				className="explore-card__image card-image"
				src={props.imgSrc}
				alt=""
			/>
			<div className="explore-card__text">
				<h3 className="explore-card__title card-title">{props.name}</h3>
				<p className="explore-card__subtitle">{props.phrase}</p>

				<a
					className="explore-card__button article__button"
					href={props.link}
					target="_blank"
					title={props.linkInfo}
				>
					Go to page
				</a>
			</div>
		</div>
	);
}

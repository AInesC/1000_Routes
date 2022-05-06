export default function ExploreCard(props) {
	return (
		<div className="explore-card card">
			<img
				className="explore-card__image card-image"
				src={props.imgSrc}
				alt=""
			/>
			<h3 className="explore-card__title card-title">
				<a href={props.link} title={props.linkInfo}>
					{props.name}
				</a>
			</h3>
			<p className="explore-card__subtitle">{props.phrase}</p>
		</div>
	);
}

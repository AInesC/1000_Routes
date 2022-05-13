export default function Suggestions(props) {
	return (
		<div className="card article">
			<h3 className="card-title">{props.title}</h3>
			<img className="card-image" src={props.imgSrc} alt="" />
			<a
				className="article__button"
				href={props.fullUrl}
				target="_blank"
				title={`Go to Wikipedia ${props.title} page`}
			>
				Go to page
			</a>
		</div>
	);
}

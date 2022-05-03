export default function SearchResult(props) {
	return (
		<article className="card article">
			<h2 className="article__title card-title">{props.title}</h2>
			<p className="article__summary">{props.extract}</p>
			<a
				className="article__button"
				href={`https://en.wikivoyage.org/w/index.php?title=${props.title}`}
				target="_blank"
				title={`Go to WikiVoyage ${props.title} page`}
			>
				Go to page
			</a>
		</article>
	);
}

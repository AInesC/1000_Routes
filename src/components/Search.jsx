import "../styles/Search.scss";

export default function Search() {
	return (
		<main>
			<form>
				<input type="seach"></input>
			</form>
			{1 != 1 && (
				<section className="seachOutput grid--auto-fit">
					<article>
						<img className="article__image card-image" />
						<h2 className="article__title card-title"></h2>
						<p className="article__summary"></p>
					</article>
				</section>
			)}
		</main>
	);
}

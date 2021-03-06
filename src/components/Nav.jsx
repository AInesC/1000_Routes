import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

export default function Nav(props) {
	function hideMenu() {
		props.setHidden(!props.isHidden);
	}

	return (
		<nav id="nav" className={props.isHidden ? "menu" : "menu show"}>
			<button
				className="menu__button"
				type="button"
				title="Hide navigation menu"
				onClick={hideMenu}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
				</svg>
			</button>
			<ul className="menu__list">
				<li>
					<NavLink
						to="/explore"
						className="menu__item"
						title="Go to Explore page"
					>
						Explore
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/travel-topics"
						className="menu__item"
						title="Go to Travel Topics page"
					>
						Travel Topics
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className="menu__item" title="Go to About page">
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="menu">
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

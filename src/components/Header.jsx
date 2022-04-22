import { NavLink } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
	return (
		<header>
			<h1 className="brand">1000 Routes</h1>
			<Nav />
			<NavLink to="/search" title="Go to seach page">
				<img src="" />
			</NavLink>
		</header>
	);
}

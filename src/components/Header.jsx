import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Header.scss";

export default function Header() {
	const nav = document.getElementById("nav");

	function showMenu() {
		nav.classList.add("open");
	}

	return (
		<header>
			<button
				id="hamburger"
				type="button"
				title="Open navigation menu"
				onClick={showMenu}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
				</svg>
			</button>
			<h1 className="brand">
				<NavLink to="/" title="Go to homepage">
					1000 Routes
				</NavLink>
			</h1>
			<Nav />
			<NavLink className="search" to="/search" title="Go to seach page">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
				</svg>
			</NavLink>
		</header>
	);
}

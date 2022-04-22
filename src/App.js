import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Explore from "./components/Explore";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import TravelTopics from "./components/TravelTopics";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Homepage />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/search" element={<Search />} />
					<Route path="/travel-topics" element={<TravelTopics />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

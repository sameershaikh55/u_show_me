import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

// IMPORTING LOADER
import HashLoader from "react-spinners/HashLoader";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalProvider } from "./data/Context";

// IMPORTING PAGES
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import HowItWorks from "./pages/HowItWorks";

function App() {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		window.addEventListener("load", (event) => {
			document.body.style.overflowY = "auto";
			const load = document.querySelector(".loading_page");
			load.style.opacity = "0";
			load.style.display = "none";
		});
	}, []);

	return (
		<GlobalProvider>
			<div className="loading_page">
				<div className="inner_loading">
					<HashLoader size={80} color="#e45364" />
				</div>
			</div>

			<div id="top"></div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/howItWorks" component={HowItWorks} />
			</Switch>
		</GlobalProvider>
	);
}

export default App;

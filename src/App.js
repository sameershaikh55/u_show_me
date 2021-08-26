import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalProvider } from "./data/Context";

// IMPORTING PAGES
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<GlobalProvider>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</GlobalProvider>
	);
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import { GlobalProvider } from "./data/Context";

// IMPORTING PAGES
import Home from "./pages/Home";

function App() {
    return ( <
        GlobalProvider >
        <
        Home / >
        <
        /GlobalProvider>
    );
}

export default App;
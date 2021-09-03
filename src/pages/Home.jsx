import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../data/Context";
import homeIm from "../assets/images/homeIm.svg";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Hybrid from "../components/Hybrid";
import FeaturedShows from "../components/FeaturedShows";
import AboutFun from "../components/AboutFun";
import News from "../components/News";
import Partner from "../components/Partner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useHooks } from "../hooks/useHooks.jsx";
import Sidebar from "../components/Sidebar";
import WHO from "../components/WHO";

const Home = () => {
	const { isOpen, setIsOpen } = useHooks();
	const data = useContext(GlobalContext);
	const [dropdown, setDropdown] = useState({
		t: "EN",
	});
	const [dropdown2, setDropdown2] = useState({
		t: "PT",
	});
	const [dropdown3, setDropdown3] = useState({
		t: "DE",
	});
	const [url, setUrl] = useState(dropdown.t);
	const [dataHome, setDataHome] = useState(data[0].EN.home);

	const second = () => {
		setDropdown({
			t: dropdown2.t,
		});
		setDropdown2({
			t: dropdown.t,
		});
		setUrl(dropdown2.t);
	};

	const third = () => {
		setDropdown({
			t: dropdown3.t,
		});
		setDropdown3({
			t: dropdown.t,
		});
		setUrl(dropdown3.t);

		// if (url === "EN") {
		// 	let dataEN = data[0].EN.home;
		// 	setDataHome(dataEN);
		// } else if (url === "DE") {
		// 	let dataDE = data[0].DE.home;
		// 	setDataHome(dataDE);
		// } else if (url === "PT") {
		// 	let dataPT = data[0].PT.home;
		// 	setDataHome(dataPT);
		// }
	};

	useEffect(() => {
		if (url === "EN") {
			let dataEN = data[0].EN.home;
			setDataHome(dataEN);
		} else if (url === "DE") {
			let dataDE = data[0].DE.home;
			setDataHome(dataDE);
		} else if (url === "PT") {
			let dataPT = data[0].PT.home;
			setDataHome(dataPT);
		}
	}, [dropdown, dropdown2, dropdown3]);

	return (
		<>
			<Header
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				dropdown={dropdown}
				dropdown2={dropdown2}
				dropdown3={dropdown3}
				second={second}
				third={third}
				// handleChange={handleChange}
			/>
			<Sidebar
				isOpen={isOpen}
				ClickEvent={setIsOpen}
				// handleChange={handleChange}
				// language={language}
				dataHome={dataHome}
			/>
			<Hero dataHome={dataHome} />
			<About dataHome={dataHome} />

			{/* IMAGE START */}
			<div id="hiw" className="w-100">
				<img className="w-100" src={homeIm} alt="" />
			</div>
			{/* IMAGE END */}

			<Hybrid dataHome={dataHome} />
			<WHO dataHome={dataHome} />
			<FeaturedShows dataHome={dataHome} />
			<AboutFun dataHome={dataHome} />
			<News dataHome={dataHome} />
			<Partner dataHome={dataHome} />
			<Newsletter dataHome={dataHome} />
			<Footer dataHome={dataHome} />
		</>
	);
};

export default Home;

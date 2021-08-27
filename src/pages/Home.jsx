import React, { useContext, useState } from "react";
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
	const [language, setLanguage] = useState("EN");
	const [dataHome, setDataHome] = useState(data[0].EN.home);

	function handleChange(e) {
		setLanguage(e.target.value);
		let url = e.target.value;

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
	}

	return (
		<>
			<Header
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				language={language}
				setLanguage={setLanguage}
				handleChange={handleChange}
			/>
			<Sidebar
				isOpen={isOpen}
				ClickEvent={setIsOpen}
				handleChange={handleChange}
				language={language}
				dataHome={dataHome}
			/>
			<Hero dataHome={dataHome} />
			<About dataHome={dataHome} />

			{/* IMAGE START */}
			<div className="w-100">
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

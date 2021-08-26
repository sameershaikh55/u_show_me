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

const Home = () => {
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
				language={language}
				setLanguage={setLanguage}
				handleChange={handleChange}
			/>
			<Hero dataHome={dataHome} />
			<About dataHome={dataHome} />

			{/* IMAGE START */}
			<div className="w-100">
				<img className="w-100" src={homeIm} alt="" />
			</div>
			{/* IMAGE END */}

			<Hybrid dataHome={dataHome} />
			<FeaturedShows dataHome={dataHome} />
			<AboutFun dataHome={dataHome} />
			<News dataHome={dataHome} />
		</>
	);
};

export default Home;

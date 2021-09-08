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
	let Lang = localStorage.getItem("Lang");
	const { isOpen, setIsOpen } = useHooks();
	const data = useContext(GlobalContext);
	const [on, setOn] = useState(false);
	const [dropdown, setDropdown] = useState({
		t: Lang,
	});
	const [dropdown2, setDropdown2] = useState({
		t: (Lang === "ES" && "EN") || "ES",
	});
	const [dropdown3, setDropdown3] = useState({
		t: (Lang === "PT" && "EN") || "PT",
	});
	const [dataHome, setDataHome] = useState(data[0].EN.home);

	useEffect(() => {
		if (Lang === "EN") {
			setDataHome(data[0].EN.home);
		} else if (Lang === "ES") {
			setDataHome(data[0].ES.home);
		} else if (Lang === "PT") {
			setDataHome(data[0].PT.home);
		}
	}, [dataHome, Lang]);

	const second = () => {
		setDropdown({
			t: dropdown2.t,
		});
		setDropdown2({
			t: dropdown.t,
		});
		localStorage.setItem("Lang", dropdown2.t);
		setOn(false);
		setIsOpen(false);
	};

	const third = () => {
		setDropdown({
			t: dropdown3.t,
		});
		setDropdown3({
			t: dropdown.t,
		});
		localStorage.setItem("Lang", dropdown3.t);
		setOn(false);
		setIsOpen(false);
	};

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
				on={on}
				setOn={setOn}
			/>
			<Sidebar
				isOpen={isOpen}
				ClickEvent={setIsOpen}
				dataHome={dataHome}
				setIsOpen={setIsOpen}
				dropdown={dropdown}
				dropdown2={dropdown2}
				dropdown3={dropdown3}
				second={second}
				third={third}
				on={on}
				setOn={setOn}
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

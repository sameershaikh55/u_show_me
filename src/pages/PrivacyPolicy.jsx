import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { GlobalContext } from "../data/Context";
import { useHooks } from "../hooks/useHooks";
import Newsletter from "../components/Newsletter";
import CommonHero from "../components/CommonHero";
import PrivacyBody from "../components/PrivacyBody";

const PrivacyPolicy = () => {
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
	const [dataHome, setDataHome] = useState(data[0].EN.privacyPolicy);

	useEffect(() => {
		if (Lang === "EN") {
			setDataHome(data[0].EN.privacyPolicy);
		} else if (Lang === "ES") {
			setDataHome(data[0].ES.privacyPolicy);
		} else if (Lang === "PT") {
			setDataHome(data[0].PT.privacyPolicy);
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
		<div>
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
			<CommonHero hero={dataHome.hero} />
			<PrivacyBody dataHome={dataHome} />
			<Newsletter dataHome={dataHome} />
			<Footer dataHome={dataHome} />
		</div>
	);
};

export default PrivacyPolicy;

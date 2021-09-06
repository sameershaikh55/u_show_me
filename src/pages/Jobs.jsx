import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { GlobalContext } from "../data/Context";
import { useHooks } from "../hooks/useHooks";
import Newsletter from "../components/Newsletter";
import CommonHero from "../components/CommonHero";
import TermsBody from "../components/TermsBody";
import JobsBody from "../components/JobsBody";

const Jobs = () => {
	const { isOpen, setIsOpen } = useHooks();
	const data = useContext(GlobalContext);
	const [on, setOn] = useState(false);
	const [dropdown, setDropdown] = useState({
		t: "EN",
	});
	const [dropdown2, setDropdown2] = useState({
		t: "PT",
	});
	const [dropdown3, setDropdown3] = useState({
		t: "ES",
	});
	const [url, setUrl] = useState(dropdown.t);
	const [dataHome, setDataHome] = useState(data[0].EN.jobs);

	const second = () => {
		setDropdown({
			t: dropdown2.t,
		});
		setDropdown2({
			t: dropdown.t,
		});
		setUrl(dropdown2.t);
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
		setUrl(dropdown3.t);
		setOn(false);
		setIsOpen(false);
	};

	useEffect(() => {
		if (url === "EN") {
			let dataEN = data[0].EN.jobs;
			setDataHome(dataEN);
		} else if (url === "ES") {
			let dataDE = data[0].ES.jobs;
			setDataHome(dataDE);
		} else if (url === "PT") {
			let dataPT = data[0].PT.jobs;
			setDataHome(dataPT);
		}
	}, [dropdown, dropdown2, dropdown3]);

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
			<JobsBody dataHome={dataHome} />
			<Newsletter dataHome={dataHome} />
			<Footer dataHome={dataHome} />
		</div>
	);
};

export default Jobs;

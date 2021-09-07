import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../data/Context";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import { useHooks } from "../hooks/useHooks.jsx";
import Sidebar from "../components/Sidebar";
import CommonHero from "../components/CommonHero";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FaqBody from "../components/FaqBody";

const FAQ = () => {
	let Lang = localStorage.getItem("Lang");
	const { isOpen, setIsOpen } = useHooks();
	const data = useContext(GlobalContext);
	const [on, setOn] = useState(false);
	const [dropdown, setDropdown] = useState({
		t: Lang,
	});
	const [dropdown2, setDropdown2] = useState({
		t: Lang === "PT" && "EN" || "PT",
	});
	const [dropdown3, setDropdown3] = useState({
		t: "ES",
	});
	const [dataHome, setDataHome] = useState(data[0].EN.faq);

	useEffect(() => {
		if (Lang === "EN") {
			setDataHome(data[0].EN.faq);
		} else if (Lang === "ES") {
			setDataHome(data[0].ES.faq);
		} else if (Lang === "PT") {
			setDataHome(data[0].PT.faq);
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

	const [faq, setFaq] = useState({
		one: true,
		two: false,
		three: false,
		fourth: false,
	});

	const funcOne = () => {
		setFaq({
			one: true,
			two: false,
			three: false,
			fourth: false,
		});
	};
	const funcTwo = () => {
		setFaq({
			one: false,
			two: true,
			three: false,
			fourth: false,
		});
	};
	const funcThree = () => {
		setFaq({
			one: false,
			two: false,
			three: true,
			fourth: false,
		});
	};
	const funcFourth = () => {
		setFaq({
			one: false,
			two: false,
			three: false,
			fourth: true,
		});
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
			<CommonHero hero={dataHome.hero} faq />

			<div className="page_container faq_btns_cont">
				<div className="container-fluid px-0 px-md-4">
					{/* FAQ START */}
					<div className="row gx-0 faq_btns">
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#541dec" }}
								onClick={funcOne}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								{dataHome.faq1.h1}
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#eb5565" }}
								onClick={funcTwo}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								{dataHome.faq2.h1}
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#ebab54" }}
								onClick={funcThree}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								{dataHome.faq3.h1}
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#17bb6f" }}
								onClick={funcFourth}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								{dataHome.faq3.h1}
							</button>
						</div>
					</div>
					{/* FAQ END */}
				</div>
			</div>

			{faq.one && <FaqBody colorr="#541DEC" dataHome={dataHome.faq1} />}
			{faq.two && <FaqBody colorr="#EB5565" dataHome={dataHome.faq2} />}
			{faq.three && <FaqBody colorr="#EBAB54" dataHome={dataHome.faq3} />}
			{faq.fourth && <FaqBody colorr="#17BB6F" dataHome={dataHome.faq4} />}

			<Newsletter dataHome={dataHome} />
			<Footer dataHome={dataHome} />
		</div>
	);
};

export default FAQ;

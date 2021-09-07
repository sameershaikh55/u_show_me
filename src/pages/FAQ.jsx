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
	const [dataHome, setDataHome] = useState(data[0].EN.faq);

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
			let dataEN = data[0].EN.faq;
			setDataHome(dataEN);
		} else if (url === "ES") {
			let dataDE = data[0].ES.faq;
			setDataHome(dataDE);
		} else if (url === "PT") {
			let dataPT = data[0].PT.faq;
			setDataHome(dataPT);
		}
	}, [dropdown, dropdown2, dropdown3]);

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
			<CommonHero hero={dataHome.hero} />

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
								Artist/Label
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#eb5565" }}
								onClick={funcTwo}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								Producer/Venue
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#ebab54" }}
								onClick={funcThree}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								Brand
							</button>
						</div>
						<div className="col-6 col-md-3 faq_btns_inner">
							<button
								style={{ background: "#17bb6f" }}
								onClick={funcFourth}
								className="w-100 py-2 text-white fw-bold NeueMachina border-0"
							>
								Fan
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

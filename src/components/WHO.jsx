import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import WHOMobile from "./WHOMobile";
import WhoForm from "./WhoForm";

const WHO = ({ dataHome }) => {
	const {
		who1under,
		slide1T,
		slide1T2,
		slide1D,
		slide2T,
		slide2T2,
		slide2D,
		slide3T,
		slide3T2,
		slide3D,
		slide4T,
		slide4T2,
		slide4D,
		present,
		present2,
		send,
		response,
		nameN,
		emailE,
	} = dataHome;

	const [one, setOne] = useState(false);
	const [two, setTwo] = useState(false);
	const [three, setThree] = useState(false);
	const [four, setFour] = useState(false);

	useEffect(() => {
		const slide1 = document.querySelector(".WHOSlide1");
		const slide2 = document.querySelector(".WHOSlide2");
		const slide3 = document.querySelector(".WHOSlide3");
		const slide4 = document.querySelector(".WHOSlide4");
		const slideIO1 = document.querySelector(".WHOSlide1 .icon1");
		const slideIO2 = document.querySelector(".WHOSlide2 .icon1");
		const slideIO3 = document.querySelector(".WHOSlide3 .icon1");
		const slideIO4 = document.querySelector(".WHOSlide4 .icon1");
		const slideIC1 = document.querySelector(".WHOSlide1 .icon2");
		const slideIC2 = document.querySelector(".WHOSlide2 .icon2");
		const slideIC3 = document.querySelector(".WHOSlide3 .icon2");
		const slideIC4 = document.querySelector(".WHOSlide4 .icon2");

		if (slideIO1) {
			slideIO1.addEventListener("click", () => {
				slide2.classList.add("min_slide");
				slide3.classList.add("min_slide");
				slide4.classList.add("min_slide");
				slide1.classList.remove("min_slide");
				setTimeout(() => {
					setOne(true);
				}, 1000);
				setTwo(false);
				setThree(false);
				setFour(false);
			});
			slideIO2.addEventListener("click", () => {
				slide1.classList.add("min_slide");
				slide3.classList.add("min_slide");
				slide4.classList.add("min_slide");
				slide2.classList.remove("min_slide");
				setOne(false);
				setTimeout(() => {
					setTwo(true);
				}, 1000);
				setThree(false);
				setFour(false);
			});
			slideIO3.addEventListener("click", () => {
				slide2.classList.add("min_slide");
				slide1.classList.add("min_slide");
				slide4.classList.add("min_slide");
				slide3.classList.remove("min_slide");
				setOne(false);
				setTwo(false);
				setTimeout(() => {
					setThree(true);
				}, 1000);
				setFour(false);
			});
			slideIO4.addEventListener("click", () => {
				slide2.classList.add("min_slide");
				slide3.classList.add("min_slide");
				slide1.classList.add("min_slide");
				slide4.classList.remove("min_slide");
				setOne(false);
				setTwo(false);
				setThree(false);
				setTimeout(() => {
					setFour(true);
				}, 1000);
			});
		}

		slideIC1.addEventListener("click", () => {
			slide2.classList.remove("min_slide");
			slide3.classList.remove("min_slide");
			slide4.classList.remove("min_slide");
			setOne(false);
		});

		slideIC2.addEventListener("click", () => {
			slide1.classList.remove("min_slide");
			slide3.classList.remove("min_slide");
			slide4.classList.remove("min_slide");
			setTwo(false);
		});

		slideIC3.addEventListener("click", () => {
			slide1.classList.remove("min_slide");
			slide2.classList.remove("min_slide");
			slide4.classList.remove("min_slide");
			setThree(false);
		});

		slideIC4.addEventListener("click", () => {
			slide1.classList.remove("min_slide");
			slide2.classList.remove("min_slide");
			slide3.classList.remove("min_slide");
			setFour(false);
		});
	}, []);

	return (
		<div className="who_container">
			<div className="w-100">
				<div className="who_inner">
					<div className="WHOSlide1 position-relative">
						{/* ICONS START */}
						<div className="icons">
							<FaTimes
								style={{ opacity: (one && 1) || 0 }}
								className="icon2 pointer"
								fontSize="1.6rem"
							/>
							<FiPlus
								style={{ opacity: (!one && 1) || 0 }}
								className="icon1 pointer"
								fontSize="1.6rem"
							/>
						</div>
						{/* ICONS END */}

						<div className="text_content h-100">
							<div className="inner_text w-100">
								<h6 className="text-white NeueMachina f19 w-100">
									{who1under + "n"}
								</h6>
								<h1
									style={{ wordBreak: "break-word" }}
									className="underlineAbout text-white NeueMachina fw-bold w-100"
								>
									{slide1T}
								</h1>
							</div>
							<div className="inner_text two firstS w-100">
								<h6 className="text-white NeueMachina w-100">
									{who1under + "n"}
								</h6>
								<h1 className="pb-1 f34 text-white NeueMachina fw-bold w-100">
									{slide1T}
								</h1>
							</div>
							{one && (
								<div
									// style={{ opacity: (one && 1) || 0 }}
									className="WHO_detail ms-5 text-white"
								>
									<h4 className="f30 mb-4 NeueMachina fw-bold">{slide1T2}</h4>
									<p className="f19 mb-0 NeueMachina lh22">{slide1D}</p>

									<WhoForm
										nameN={nameN}
										emailE={emailE}
										send={send}
										response={response}
										formNo={1}
										present={present}
									/>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide2 position-relative">
						{/* ICONS START */}
						<div className="icons">
							<FaTimes
								style={{ opacity: (two && 1) || 0 }}
								className="icon2 pointer"
								fontSize="1.6rem"
							/>
							<FiPlus
								style={{ opacity: (!two && 1) || 0 }}
								className="icon1 pointer"
								fontSize="1.6rem"
							/>
						</div>
						{/* ICONS END */}

						<div className="text_content h-100">
							<div className="inner_text">
								<h6 className="text-white f19 NeueMachina">{who1under}</h6>
								<h1
									style={{ wordBreak: "break-word" }}
									className="underlineAbout text-white NeueMachina fw-bold"
								>
									{slide2T}
								</h1>
							</div>
							<div className="inner_text two secondS">
								<h6 className="text-white NeueMachina">{who1under}</h6>
								<h1 className="pb-1 f34 text-white NeueMachina fw-bold">
									{slide2T}
								</h1>
							</div>
							{two && (
								<div className="WHO_detail ms-5 text-white">
									<h4 className="mb-4 NeueMachina fw-bold f30">{slide2T2}</h4>
									<p className="f19 mb-0 NeueMachina lh22">{slide2D}</p>

									<WhoForm
										nameN={nameN}
										emailE={emailE}
										send={send}
										response={response}
										formNo={2}
										present={present}
									/>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide3 position-relative">
						{/* ICONS START */}
						<div className="icons">
							<FaTimes
								style={{ opacity: (three && 1) || 0 }}
								className="icon2 pointer"
								fontSize="1.6rem"
							/>
							<FiPlus
								style={{ opacity: (!three && 1) || 0 }}
								className="icon1 pointer"
								fontSize="1.6rem"
							/>
						</div>
						{/* ICONS END */}

						<div className="text_content h-100">
							<div className="inner_text">
								<h6 className="text-white f19 NeueMachina">{who1under}</h6>
								<h1
									style={{ wordBreak: "break-word" }}
									className="underlineAbout text-white NeueMachina fw-bold"
								>
									{slide3T}
								</h1>
							</div>
							<div
								style={{ marginLeft: slide4T === "marca" && "-17.5rem" }}
								className="inner_text two thirdS"
							>
								<h6 className="text-white NeueMachina">{who1under}</h6>
								<h1 className="pb-1 f34 text-white NeueMachina fw-bold">
									{slide3T}
								</h1>
							</div>
							{three && (
								<div className="WHO_detail ms-5 text-white">
									<h4 className="mb-4 NeueMachina fw-bold f30">{slide3T2}</h4>
									<p className="f19 mb-0 NeueMachina lh22">{slide3D}</p>

									<WhoForm
										nameN={nameN}
										emailE={emailE}
										send={send}
										response={response}
										formNo={3}
										present={present}
									/>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide4 position-relative">
						{/* ICONS START */}
						<div className="icons">
							<FaTimes
								style={{ opacity: (four && 1) || 0 }}
								className="icon2 pointer"
								fontSize="1.6rem"
							/>
							<FiPlus
								style={{ opacity: (!four && 1) || 0 }}
								className="icon1 pointer"
								fontSize="1.6rem"
							/>
						</div>
						{/* ICONS END */}

						<div className="text_content h-100">
							<div className="inner_text">
								<h6 className="text-white f19 NeueMachina">{who1under}</h6>
								<h1
									style={{
										wordBreak: "keep-all",
									}}
									className="underlineAbout text-white NeueMachina fw-bold"
								>
									{slide4T}
								</h1>
							</div>
							<div
								style={{ marginLeft: slide4T === "admirador" && "-14.5rem" }}
								className="inner_text two fourthS"
							>
								<h6 className="text-white NeueMachina">{who1under}</h6>
								<h1 className="pb-1 f34 text-white NeueMachina fw-bold">
									{slide4T}
								</h1>
							</div>
							{four && (
								<div className="WHO_detail ms-5 text-white">
									<h4 className="mb-4 NeueMachina fw-bold f30">{slide4T2}</h4>
									<p className="f19 mb-0 NeueMachina lh22">{slide4D}</p>

									<WhoForm
										nameN={nameN}
										emailE={emailE}
										send={send}
										response={response}
										formNo={0}
										present={present2}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="whoMobile">
					<WHOMobile dataHome={dataHome} />
				</div>
			</div>
		</div>
	);
};

export default WHO;

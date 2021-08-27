import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const WHO = ({ dataHome }) => {
	const {
		who1,
		slide1T,
		slide1T2,
		slide1D,
		slide2T,
		slide2T2,
		slide2D,
		present,
		send,
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
			<div className="page_container2">
				<div className="d-flex">
					<div className="WHOSlide1">
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
							<div className="inner_text">
								<h6 className="text-white">{who1}</h6>
								<h1 className="underlineAbout text-white">{slide1T}</h1>
							</div>
							{one && (
								<div
									// style={{ opacity: (one && 1) || 0 }}
									className="WHO_detail ms-5 text-white"
								>
									<h2 className="mb-4">{slide1T2}</h2>
									<p className="mb-0">{slide1D}</p>
									<p> {present} </p>

									<div className="d-flex align-items-end mt-4">
										<div className="d-flex flex-column">
											<input type="text" name="" id="" placeholder="Name" />
											<input
												type="text"
												name=""
												id=""
												placeholder="E—mail"
												className="mt-3"
											/>
										</div>
										<div className="ms-3">
											<button>{send}</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide2">
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
								<h6 className="text-white">{who1}</h6>
								<h1 className="underlineAbout text-white">{slide2T}</h1>
							</div>
							{two && (
								<div className="WHO_detail ms-5 text-white">
									<h2 className="mb-4">{slide2T2}</h2>
									<p className="mb-0">{slide2D}</p>
									<p>{present}</p>

									<div className="d-flex align-items-end mt-4">
										<div className="d-flex flex-column">
											<input type="text" name="" id="" placeholder="Name" />
											<input
												type="text"
												name=""
												id=""
												placeholder="E—mail"
												className="mt-3"
											/>
										</div>
										<div className="ms-3">
											<button>{send}</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide3">
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
								<h6 className="text-white">{who1}</h6>
								<h1 className="underlineAbout text-white">Brand</h1>
							</div>
							{three && (
								<div className="WHO_detail ms-5 text-white">
									<h2 className="mb-4">
										Sponsor shows and measure engagements{" "}
									</h2>
									<p className="mb-0">
										Your Brand finally have the power to maximize awareness and
										new ways of engagement with digital audiences. UshowMe
										provides you tools for your brand to get the highlight it
										deserves with measurable results. UshowMe offers full
										integration capabilities.
									</p>
									<p>{present}</p>

									<div className="d-flex align-items-end mt-4">
										<div className="d-flex flex-column">
											<input type="text" name="" id="" placeholder="Name" />
											<input
												type="text"
												name=""
												id=""
												placeholder="E—mail"
												className="mt-3"
											/>
										</div>
										<div className="ms-3">
											<button>{send}</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="WHOSlide4">
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
								<h6 className="text-white">{who1}</h6>
								<h1 className="underlineAbout text-white">Fan</h1>
							</div>
							{four && (
								<div className="WHO_detail ms-5 text-white">
									<h2 className="mb-4">Have fun with new interactions </h2>
									<p className="mb-0">
										UshowMe gives you more access to your favorite artists than
										if you were there in person. Connect your camera, express
										emotions and your best moves on the Top Fans Stage. Speak
										with everybody on the chat and engage with artists on
										excitants Meet & Greets.
									</p>
									<p>Subscribe Newsletter:</p>

									<div className="d-flex align-items-end mt-4">
										<div className="d-flex flex-column">
											<input type="text" name="" id="" placeholder="Name" />
											<input
												type="text"
												name=""
												id=""
												placeholder="E—mail"
												className="mt-3"
											/>
										</div>
										<div className="ms-3">
											<button>{send}</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WHO;

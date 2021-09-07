import React, { useEffect, useState } from "react";
import rightArrow from "../assets/images/rightArrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel]);

const FeaturedShows = ({ dataHome }) => {
	const { feature1, feature2 } = dataHome;
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			return fetch(
				"https://virtserver.swaggerhub.com/ushowmetv/api/1.0.0/events"
			)
				.then((response) => response.json())
				.then((data) => setData(data));
		};
		fetchData();
	}, [data]);

	return (
		<>
			{/* DESKTOP SCREEN START */}
			<div id="feature" className="d-none d-md-block feature_container">
				<div className="w-100">
					<div className="container-fluid px-0">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="ps-5 d-flex flex-column flex-sm-row align-items-start">
									<h1 className="text-white f50 underlineAbout pb-4 me-5 NeueMachina fw-bold">
										{feature1}
									</h1>
									<a target="blank" href="https://app.ushowme.tv/">
										<button className="btnS NeueMachina fw500 align-self-end align-self-sm-start bg3 reg text-white border-0 py-1 ps-1 pe-2 mt-4">
											<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
											{feature2}
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* DESKTOP SCREEN END */}

			{/* MOBILE SCREEN START */}
			<div
				id="feature"
				className="d-block d-md-none position-relative feature_container py-5"
			>
				<div className="w-100">
					<div className="container-fluid px-0">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="ps-2 d-flex flex-column flex-sm-row align-items-start">
									<h1 className="text-white f50 underlineAbout pb-4 NeueMachina fw-bold">
										{feature1}
									</h1>
									<a
										className="position-absolute bottom-0 end-0"
										target="blank"
										href="https://app.ushowme.tv/"
									>
										<button className="btnS NeueMachina fw500 align-self-end align-self-sm-start bg3 reg text-white border-0 py-1 ps-1 pe-2 mt-4">
											<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
											{feature2}
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* MOBILE SCREEN END */}

			<div className="feature_slider_container">
				{data.length > 0 && (
					<Swiper
						direction={"horizontal"}
						mousewheel={true}
						breakpoints={{
							1600: {
								slidesPerView: 4.5,
							},
							1400: {
								slidesPerView: 4.2,
							},
							1200: {
								slidesPerView: 3.3,
							},
							1000: {
								slidesPerView: 2.8,
							},
							700: {
								slidesPerView: 2.1,
							},
							500: {
								slidesPerView: 1.8,
							},
							300: {
								slidesPerView: 1.2,
							},
						}}
						spaceBetween={1}
						freeMode={true}
						className="mySwiper"
					>
						{data.map((prev, ind) => {
							const { imgUrl, title, subtitle, startEventDate, id } = prev;
							// const dayDate = new Date(startEventDate);
							const dayDate = new Date(startEventDate);
							const dayDateString = new Date(startEventDate)
								.toString()
								.split(" ");

							const monthNames = [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
								"July",
								"August",
								"September",
								"October",
								"November",
								"December",
							];
							function dateOrdinal(d) {
								return (
									d +
									(31 === d || 21 === d || 1 === d
										? "st"
										: 22 === d || 2 === d
										? "nd"
										: 23 === d || 3 === d
										? "rd"
										: "th")
								);
							}
							return (
								<SwiperSlide key={ind}>
									<div className="news_card position-relative pe-2">
										<img className="w-100" src={imgUrl} alt="" />
										<div className="overlay"></div>
										{/* INNER START */}
										<div className="d-flex flex-column justify-content-end text_content position-absolute text-white text-center">
											<h2 className="NeueMachina fw-bold mb-0">{title}</h2>
											<h6 className="NeueMachina mb-4">{subtitle}</h6>
											<h6 className="NeueMachina fw600 mb-0">
												{dateOrdinal(dayDateString[2])}{" "}
												{monthNames[dayDate.getMonth()]}
											</h6>
											<h6 className="fw400 NeueMachina mt-0">
												{dayDateString[4]} {dayDateString[5]}
											</h6>
											<a
												target="blank"
												href={`https://qua-app.ushowme.tv/show?id=${id}`}
											>
												<button className="NeueMachina fw500 bg3 text-white border-0 py-1 px-3 mt-5">
													Show Details
												</button>
											</a>
										</div>
										{/* INNER END */}
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				)}
			</div>
			{/* MOBILE SCREEN END */}
		</>
	);
};

export default FeaturedShows;

import React, { useEffect, useState } from "react";
import rightArrow from "../assets/images/rightArrow.svg";
import Slider from "react-slick";
import HorizontalScroll from "react-scroll-horizontal";

const FeaturedShows = ({ dataHome }) => {
	const { feature1, feature2 } = dataHome;
	const [data, setData] = useState([]);

	var settings = {
		centerMode: true,
		dots: false,
		infinite: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 50,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
				},
			},
		],
	};

	useEffect(() => {
		const fetchData = () => {
			return fetch(
				"https://virtserver.swaggerhub.com/ushowmetv/api/1.0.0/events"
			)
				.then((response) => response.json())
				.then((data) => setData(data));
		};
		fetchData();
	}, []);

	const child = { width: `356px`, height: `100%` };
	const parent = { width: `100%`, height: `39rem` };

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

			{/* DESKTOP SCREEN START */}
			<div className="feature_slider_container d-none d-md-block">
				<div className="w-100">
					<div style={parent}>
						<HorizontalScroll>
							{data.map((prev, ind) => {
								const { imgUrl, title, subtitle, startEventDate, id } = prev;

								return (
									<div
										style={child}
										className="news_card position-relative pe-2"
										key={ind}
									>
										<img className="w-100" src={imgUrl} alt="" />
										{/* INNER START */}
										<div className="d-flex flex-column justify-content-end text_content position-absolute text-white text-center">
											<h1 className="NeueMachina fw-bold">{title}</h1>
											<h5 className="NeueMachina mt-4">{subtitle}</h5>
											<h5 className="NeueMachina fw400 mt-3">
												{startEventDate}
											</h5>
											<h5 className="fw400">21:30 GMT + 1</h5>
											<a
												target="blank"
												href={`https://qua-app.ushowme.tv/show?id=${id}`}
											>
												<button className="NeueMachina fw500 bg3 text-white border-0 py-1 px-3 mt-4">
													Show Details
												</button>
											</a>
										</div>
										{/* INNER END */}
									</div>
								);
							})}
						</HorizontalScroll>
					</div>
				</div>
			</div>
			{/* DESKTOP SCREEN END */}

			{/* MOBILE SCREEN START */}
			<div className="feature_slider_container d-block d-md-none">
				<div className="w-100">
					<Slider {...settings}>
						{data.map((prev, ind) => {
							const { imgUrl, title, subtitle, startEventDate, id } = prev;

							return (
								<div className="news_card position-relative pe-2" key={ind}>
									<img className="w-100" src={imgUrl} alt="" />

									{/* INNER START */}
									<div className="d-flex flex-column justify-content-end text_content position-absolute text-white text-center">
										<h1 className="NeueMachina fw-bold">{title}</h1>
										<h5 className="NeueMachina mt-4">{subtitle}</h5>
										<h5 className="NeueMachina fw400 mt-3">{startEventDate}</h5>
										<h5 className="fw400">21:30 GMT + 1</h5>
										<a
											target="blank"
											href={`https://qua-app.ushowme.tv/show?id=${id}`}
										>
											<button className="NeueMachina bg3 text-white border-0 py-1 px-3 mt-4">
												Show Details
											</button>
										</a>
									</div>
									{/* INNER END */}
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
			{/* MOBILE SCREEN END */}
		</>
	);
};

export default FeaturedShows;

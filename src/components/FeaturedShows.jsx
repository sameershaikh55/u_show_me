import React, { useEffect, useState } from "react";
import rightArrow from "../assets/images/rightArrow.svg";
import Slider from "react-slick";

const FeaturedShows = ({ dataHome }) => {
	const { feature1, feature2 } = dataHome;
	const [data, setData] = useState([]);

	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
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
					infinite: true,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
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

	return (
		<>
			<div id="feature" className="feature_container">
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
			<div className="feature_slider_container">
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
											<button className="bg3 text-white border-0 py-1 px-3 mt-4">
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
		</>
	);
};

export default FeaturedShows;

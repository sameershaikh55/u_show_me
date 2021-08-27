import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import event from "../assets/images/event.svg";

const FeaturedShows = ({ dataHome }) => {
	const { feature1, feature2 } = dataHome;
	// const [data, setData] = useState([]);

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

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		return fetch("https://qua-app.ushowme.tv/api/events/all")
	// 			.then((response) => response.json())
	// 			.then((data) => console.log(data));
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<>
			<div className="feature_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="d-flex flex-column flex-sm-row align-items-start">
									<h1 className="text-white f50 underlineAbout pb-4 me-5 reg">
										{feature1}
									</h1>
									<button className="align-self-end align-self-sm-start bg3 reg text-white border-0 ps-1 pe-2 mt-4">
										<BiRightArrowAlt fontSize="1.2rem" /> {feature2}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="feature_slider_container">
				<div className="page_container2">
					<div className="row">
						<div className="col-12 mx-auto">
							<Slider {...settings}>
								{[1, 1, 1, 1, 1, 1, 1, 1].map((prev, ind) => {
									return (
										<div className="news_card position-relative pe-2" key={ind}>
											<img className="w-100" src={event} alt="" />

											{/* INNER START */}
											<div className="text_content position-absolute text-white">
												<h1>Show Name</h1>
												<h5 className="mt-4">Subtitle</h5>
												<h5 className="fw400 mt-3">24th September</h5>
												<h5 className="fw400">21:30 GMT + 1</h5>
												<button className="bg3 text-white border-0 py-1 px-3 mt-4">
													{dataHome.heroBtn}
												</button>
											</div>
											{/* INNER END */}
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedShows;

import React from "react";
import logo from "../assets/images/logo2.svg";
import Slider from "react-slick";
import newsCard from "../assets/images/newsCard.svg";
import { BsFillEyeFill } from "react-icons/bs";

const News = ({ dataHome }) => {
	const { news } = dataHome;

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

	const data = [
		{
			i: newsCard,
			t: (
				<p className="text-white f14 mb-0">
					Ushowme selected as one of the <br /> 15 startups for the NOS & AWS 5G
					Acceler…
				</p>
			),
		},
		{
			i: newsCard,
			t: (
				<p className="text-white f14 mb-0">
					Ushowme selected as one of the 15 startups <br /> for the NOS & AWS 5G
					Acceler…
				</p>
			),
		},
		{
			i: newsCard,
			t: (
				<p className="text-white f14 mb-0">
					Ushowme selected as one of the 15 startups <br /> for the NOS & AWS 5G
					Acceler…
				</p>
			),
		},
		{
			i: newsCard,
			t: (
				<p className="text-white f14 mb-0">
					Ushowme selected as one of the 15 startups <br /> for the NOS & AWS 5G
					Acceler…
				</p>
			),
		},
		{
			i: newsCard,
			t: (
				<p className="text-white f14 mb-0">
					Ushowme selected as one of the 15 startups <br /> for the NOS & AWS 5G
					Acceler…
				</p>
			),
		},
	];

	return (
		<div className="news_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<img className="logo" src={logo} alt="" />
							<h1 className="text-white f50 underlineAbout reg pb-4 mt-2">
								{news}
							</h1>

							<div className="newsSliderContainer">
								<Slider {...settings}>
									{data.map((prev, ind) => {
										const { i, t } = prev;
										return (
											<div className="news_card mt-5 px-2" key={ind}>
												<img className="w-100" src={i} alt="" />
												<div className="mt-2 reg">
													{t}
													<button className="mt-2 purpleBg px-2 text-white d-flex align-items-center border-0">
														<BsFillEyeFill className="me-2" /> Read the Full
														Article
													</button>
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;

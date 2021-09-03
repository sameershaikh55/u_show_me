import React from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import top from "../assets/images/top.svg";

const Partner = ({ dataHome }) => {
	const { partner1, partner2, partner3 } = dataHome;
	var settings = {
		centerMode: true,
		dots: false,
		infinite: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		initialSlide: 0,
		centerPadding: 50,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
		],
	};

	const data = [
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/Blueticket_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/CCA_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/LACS_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/IdeaSpaces_Logo.png",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/Demium_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/BackStage_Logo.jpg",
	];

	return (
		<div className="partner_container">
			<div className="w-100">
				<div className="container-fluid px-0">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<p className="mb-0 NeueMachina">{partner1}</p>
							<h1 className="underlineAbout NeueMachina fw-bold">{partner2}</h1>
							<p className="underText mb-0 underlineDark NeueMachina pb-4 f24">
								{partner3}
							</p>

							<div className="partner">
								<Slider {...settings}>
									{data.map((prev, ind) => {
										return (
											<div className="partner_card mt-4 px-2" key={ind}>
												<img src={prev} alt="" />
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="text-center">
								<Link
									smooth={true}
									duration={600}
									spy={true}
									offset={-100}
									to="top"
									className="mt-5 pt-2 pointer"
								>
									<img src={top} alt="" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;

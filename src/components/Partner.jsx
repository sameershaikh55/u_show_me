import React from "react";
import Slider from "react-slick";
import partner from "../assets/images/partner.svg";

const Partner = ({ dataHome }) => {
	const { partner1, partner2, partner3 } = dataHome;
	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 50,
	};
	return (
		<div className="partner_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<p className="mb-0">{partner1}</p>
							<h1 className="underlineAbout">{partner2}</h1>
							<p className="underText mb-0 underlineDark pb-4 f24">{partner3}</p>

							<div className="newsSliderContainer">
								<Slider {...settings}>
									{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((prev, ind) => {
										return (
											<div className="news_card mt-5 px-2" key={ind}>
												<img className="w-100" src={partner} alt="" />
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

export default Partner;

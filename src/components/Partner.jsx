import React from "react";
import { Link } from "react-scroll";
import top from "../assets/images/top.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const Partner = ({ dataHome }) => {
	const { partner1, partner2, partner3 } = dataHome;

	const data = [
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/Blueticket_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/CCA_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/LACS_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/IdeaSpaces_Logo.png",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/Demium_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/BackStage_Logo.jpg",
		"https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/Partners/BackStage_Logo.jpg",
	];

	return (
		<div className="partner_container ps-4 ps-md-5">
			<div className="w-100">
				<p className="mb-0 NeueMachina">{partner1}</p>
				<h1 className="underlineAbout NeueMachina fw-bold">{partner2}</h1>
				<p className="underText mb-0 underlineDark NeueMachina pb-4 f24">
					{partner3}
				</p>

				<div>
					<Swiper
						breakpoints={{
							1800: {
								slidesPerView: 6.2,
							},
							1400: {
								slidesPerView: 6,
							},
							1200: {
								slidesPerView: 5.3,
							},
							1000: {
								slidesPerView: 4.8,
							},
							700: {
								slidesPerView: 3.1,
							},
							500: {
								slidesPerView: 2.8,
							},
							300: {
								slidesPerView: 1.6,
							},
						}}
						slidesPerView={4}
						spaceBetween={1}
						freeMode={true}
						className="mySwiper"
					>
						{data.map((prev, ind) => {
							return (
								<SwiperSlide>
									<div className="partner_card mt-4 px-2" key={ind}>
										<img src={prev} alt="" />
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="scrollToTop text-center">
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
	);
};

export default Partner;

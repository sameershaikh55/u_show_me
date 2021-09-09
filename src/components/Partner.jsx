import React from "react";
import { Link } from "react-scroll";
import top from "../assets/images/top.svg";

// import Swiper core and required modules
import SwiperCore, { Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel]);

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
				<p className="mb-0 NeueMachina f19">{partner1}</p>
				<h1 className="underlineAbout NeueMachina f54 fw-bold">{partner2}</h1>
				<p className="underText mb-0 f35 underlineDark NeueMachina pb-4">
					{partner3}
				</p>

				<div className="partners_container">
					<div className="upp">
						{data.map((prev, ind) => {
							return (
								<div className="partner_card" key={ind}>
									<div className="mt-4 px-2">
										<img src={prev} alt="" />
									</div>
								</div>
							);
						})}
					</div>
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

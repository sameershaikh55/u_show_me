import React from "react";
import rightArrow from "../assets/images/rightArrow.svg";

const HowHero = ({ dataHome, dropdown: { t } }) => {
	return (
		<div className="hero position-relative">
			<div>
				<img
					className="w-100"
					src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_How_It_Works_Video_BG.jpg"
					alt=""
				/>
			</div>

			<div className="hero_container howHero d-flex justify-content-center align-items-end align-items-sm-center">
				<a
					target="blank"
					className="text-decoration-none"
					href="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_Landing_How_It_Works_New.mp4"
				>
					<button className="hero_btn d-flex align-items-center purpleBg text-white border-0 ps-1 pe-3 mt-4 py-2 NeueMachina fw500">
						<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
						{dataHome.heroBtn}
					</button>
				</a>
			</div>
		</div>
	);
};

export default HowHero;

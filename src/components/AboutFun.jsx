import React from "react";
import ltsAll from "../assets/images/ltsAll.svg";
import { BsFillEyeFill } from "react-icons/bs";

const AboutFun = ({ dataHome }) => {
	const { itsAll1, itsAll2 } = dataHome;

	return (
		<div className="its_all_container w-100 position-relative">
			<img src={ltsAll} alt="" />

			{/* ABSOLUTE START */}
			<div className="its_all_abs">
				<h1 className="text-white f64 underlineAbout NeueMachina fw-bold">
					{itsAll1}
				</h1>

				<a
					target="blank"
					className="text-decoration-none"
					href="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/USHOWME_TOP_FANS_1080P_2%2C5mbs.mp4"
				>
					<button className="btn_ purpleBg NeueMachina fw-bold px-2 px-xl-4 text-white d-flex align-items-center border-0">
						<BsFillEyeFill className="me-2" /> {itsAll2}
					</button>
				</a>
			</div>
			{/* ABSOLUTE END */}
		</div>
	);
};

export default AboutFun;

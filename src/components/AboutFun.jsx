import React from "react";
import ltsAll from "../assets/images/ltsAll.svg";
import { BsFillEyeFill } from "react-icons/bs";

const AboutFun = ({ dataHome }) => {
	const { itsAll1, itsAll2 } = dataHome;

	return (
		<div className="w-100 position-relative">
			<img className="w-100" src={ltsAll} alt="" />

			{/* ABSOLUTE START */}
			<div className="its_all_abs">
				<h1 className="text-white f64 underlineAbout pb-4">{itsAll1}</h1>
				<button className="mt-4 purpleBg px-2 text-white d-flex align-items-center border-0">
					<BsFillEyeFill className="me-2" /> {itsAll2}
				</button>
			</div>
			{/* ABSOLUTE END */}
		</div>
	);
};

export default AboutFun;

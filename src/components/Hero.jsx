import React, { useEffect, useRef } from "react";
import rightArrow from "../assets/images/rightArrow.svg";

const Hero = ({ dataHome }) => {
	const v1 = useRef(null);
	const v2 = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			v1.current.play();
			v2.current.play();
		}, 100);
	}, []);

	return (
		<div className="hero position-relative">
			<div className="d-none d-sm-block">
				<video
					ref={v1}
					className="w-100"
					poster=""
					autoPlay={true}
					playsInline={true}
					loop
					muted
					controls={false}
					src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_Home_Landing_Video_1920x1080.mp4"
				/>
			</div>
			<div className="d-block d-sm-none">
				<video
					ref={v2}
					className="w-100"
					poster=""
					autoPlay={true}
					playsInline={true}
					loop
					muted
					controls={false}
					src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_Home_Landing_Video_1080x1920.mp4"
				/>
			</div>
			<div className="hero_container">
				<a
					target="blank"
					className="text-decoration-none"
					href="https://app.ushowme.tv/"
				>
					<button className="hero_btn w-100 d-flex align-items-center bg3 text-white border-0 ps-1 pe-3 mt-4 py-1 NeueMachina f18 fw600">
						<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
						{dataHome.heroBtn}
					</button>
				</a>
			</div>
		</div>
	);
};

export default Hero;

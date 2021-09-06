import React from "react";
import rightArrow from "../assets/images/rightArrow.svg";

const HowHero = ({ dataHome, dropdown: { t } }) => {
	return (
		<div className="hero position-relative">
			<div className="d-none d-sm-block">
				<video
					className="w-100"
					poster=""
					autoPlay
					playsinline
					loop
					muted
					src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_Landing_How_It_Works_New.mp4"
				/>
			</div>
			<div className="d-block d-sm-none">
				<video
					className="w-100"
					poster=""
					autoPlay
					playsinline
					loop
					muted
					src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/UshowMe_Home_Landing_Video_1080x1920.mp4"
				/>
			</div>
			<div className="hero_container howHero d-flex justify-content-center align-items-end align-items-sm-center">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-10 col-lg-6 mx-auto">
								{/* <h1 className="bold text-white underline pb-4">
									{dataHome.hero}
								</h1> */}
								<a
									target="blank"
									className="text-decoration-none"
									href="https://app.ushowme.tv/"
								>
									<button
										style={{
											width:
												(t === "EN" && "250px") ||
												(t === "ES" && "330px") ||
												(t === "PT" && "280px"),
										}}
										className="hero_btn d-flex align-items-center purpleBg text-white border-0 ps-1 pe-1 mt-4 py-1 NeueMachina fw500"
									>
										<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
										{dataHome.heroBtn}
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowHero;

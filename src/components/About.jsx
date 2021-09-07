import React from "react";
import asterik from "../assets/images/asterik.svg";

const About = ({ dataHome }) => {
	const { aboutH, aboutL, aboutR1, aboutR2, aboutR3 } = dataHome;
	return (
		<div id="about" className="about_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto">
							<p className="text-white f18 mb-0 NeueMachina">
								U<span className="color3">SHOW</span>ME
							</p>
							<h1 className="text-white underlineAbout NeueMachina fw600 f50 pb-4 mt-2">
								{aboutH}
							</h1>
							<div className="row mt-4">
								<div className="col-12 col-sm-6">
									<p className="text-white f18 lh-sm spaceMono">{aboutL}</p>
								</div>
								<div className="col-12 col-sm-6 mt-4 mt-sm-0">
									<p className="color3 f18 lh-sm spaceMono fw600">{aboutR1}</p>
									<p className="text-white f18 lh-sm spaceMono lh-sm">
										{aboutR2}
									</p>
									<div className="d-flex align-items-center mt-5">
										<img
											src={asterik}
											alt=""
											className="asterik_up2 me-2 lh-sm"
										/>{" "}
										{aboutR3}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

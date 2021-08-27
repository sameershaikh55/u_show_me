import React from "react";
import logo from "../assets/images/logo2.svg";

const About = ({ dataHome }) => {
	const { aboutH, aboutL, aboutR1, aboutR2, aboutR3 } = dataHome;
	return (
		<div className="about_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<img src={logo} alt="" />
							<h1 className="text-white underlineAbout reg f50 pb-4 mt-2">
								{aboutH}
							</h1>

							<div className="row mt-4">
								<div className="col-12 col-sm-6">
									<p className="text-white f18 lh-sm reg">{aboutL}</p>
								</div>
								<div className="col-12 col-sm-6 mt-4 mt-sm-0">
									<p className="color3 f18 lh-sm reg">{aboutR1}</p>
									<p className="text-white f18 lh-sm reg">{aboutR2}</p>
									<p className="text-white mb-0 reg mt-5">
										* {aboutR3}{" "}
										<span className="ms-4 purpleBg px-3 py-1"></span>
									</p>
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
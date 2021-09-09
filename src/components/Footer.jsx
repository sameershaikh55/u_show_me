import React from "react";
import rightArrow from "../assets/images/rightArrow.svg";
import { NavLink } from "react-router-dom";

const Footer = ({ dataHome }) => {
	const { footer, footerBtn } = dataHome;

	return (
		<div className="footer_container">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row w-100">
						<div className="col-11 col-md-12 mx-auto w-100">
							<div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100">
								<div>
									<img
										src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/logo.svg"
										alt=""
									/>
								</div>
								<div className="d-flex align-items-center flex-wrap justify-content-center gap-2 gap-lg-0 mt-4 mt-lg-0">
									{footer.map((prev, i) => {
										const { t, l, el } = prev;

										return (
											<>
												{(el && (
													<a
														target="blank"
														className="text-white text-decoration-none NeueMachina mx-3 f14"
														href={
															(el.indexOf("@") > 0 && `mailto:${el}`) || `${el}`
														}
													>
														{t}
													</a>
												)) || (
													<NavLink
														className="text-white text-decoration-none NeueMachina mx-3 f14"
														key={i}
														to={l}
													>
														{t}
													</NavLink>
												)}
											</>
										);
									})}
								</div>
								<div className="mt-4 mt-lg-0">
									<a
										target="blank"
										href="https://app.ushowme.tv/"
										className="text-decoration-none"
									>
										<button className="btnS bg3 text-white NeueMachina fw600 py-1 border-0 ps-1 pe-2">
											<img src={rightArrow} alt="arrow" className="ms-2 me-2" />{" "}
											{footerBtn}
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

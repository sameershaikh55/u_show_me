import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/images/logo2.svg";

const Footer = ({ dataHome }) => {
	const { footer, footerBtn } = dataHome;

	return (
		<div className="footer_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
								<div>
									<img src={logo2} alt="" />
								</div>
								<div className="d-flex align-items-center flex-wrap justify-content-center gap-2 gap-lg-0 mt-4 mt-lg-0">
									{footer.map((prev, i) => {
										const { t, l } = prev;
										return (
											<NavLink
												className="text-white text-decoration-none reg mx-3 f14"
												key={i}
												to={l}
											>
												{t}
											</NavLink>
										);
									})}
								</div>
								<div className="mt-4 mt-lg-0">
									<button className="bg3 text-white reg border-0 ps-1 pe-2">
										<BiRightArrowAlt fontSize="1.2rem" /> {footerBtn}
									</button>
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

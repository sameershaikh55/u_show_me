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
							<div className="d-flex align-items-center justify-content-between">
								<div>
									<img src={logo2} alt="" />
								</div>
								<div className="d-flex align-items-center">
									{footer.map((prev, i) => {
										const { t, l } = prev;
										return (
											<NavLink
												className="text-white text-decoration-none mx-3 f14"
												key={i}
												to={l}
											>
												{t}
											</NavLink>
										);
									})}
								</div>
								<div>
									<button className="bg3 text-white border-0 ps-1 pe-2">
										<BiRightArrowAlt fontSize="1.2rem" /> {dataHome.footerBtn}
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

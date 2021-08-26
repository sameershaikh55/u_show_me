import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const Header = ({ language, handleChange }) => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END

	return (
		<div className="header_container d-flex justify-content-center align-items-center">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row w-100">
						<div className="col-11 col-lg-12 mx-auto w-100">
							<div className="d-flex justify-content-between w-100">
								<div className="d-flex align-items-center">
									<div className="logo_container d-flex align-items-center">
										<GiHamburgerMenu
											className="text-white me-4"
											fontSize="1.6rem"
										/>
										<img src={logo} alt="" />
									</div>
								</div>
								<div className="secondHalf d-flex align-items-center">
									<div className="icons_container">
										<a href="" className="text-decoration-none text-dark">
											<FaLinkedinIn
												fontSize="1.5rem"
												className="icon ms-2 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaFacebookF
												fontSize="1.5rem"
												className="icon ms-2 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaInstagram
												fontSize="1.5rem"
												className="icon ms-2 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaTwitter
												fontSize="1.5rem"
												className="icon ms-2 p-1 rounded-circle"
											/>
										</a>
									</div>
									<div className="ms-4">
										<select
											name=""
											id=""
											className="text-white border-0 bg-transparent pointer"
											value={language}
											onChange={handleChange}
										>
											<option value="EN">EN</option>
											<option value="PT">PT</option>
											<option value="DE">DE</option>
										</select>
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

export default Header;

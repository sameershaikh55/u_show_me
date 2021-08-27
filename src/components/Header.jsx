import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { ImCross } from "react-icons/im";

const Header = ({ language, handleChange, setIsOpen, isOpen }) => {
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
									<div className="logo_container2">
										<img className="d-block d-sm-none" src={logo} alt="" />
									</div>
									<div className="logo_container ms-3 ms-sm-0 d-flex align-items-center">
										{(isOpen && (
											<ImCross
												onClick={() => setIsOpen(false)}
												className="text-white me-4 pointer"
												fontSize="1.6rem"
											/>
										)) || (
											<GiHamburgerMenu
												onClick={() => setIsOpen(true)}
												className="text-white me-4 pointer"
												fontSize="1.6rem"
											/>
										)}
										<img className="d-none d-sm-block" src={logo} alt="" />
									</div>
								</div>
								<div className="secondHalf d-none d-sm-flex align-items-center">
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

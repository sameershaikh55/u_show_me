import React from "react";
import { NavLink } from "react-router-dom";
import {
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Sidebar = ({ isOpen, ClickEvent, language, handleChange, dataHome }) => {
	const { sideBar } = dataHome;

	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".SideBarContainer");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END

	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{sideBar.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 col-sm-6 text-center text-sm-start mt-3"
										>
											<h2>
												<NavLink
													exact
													to="/"
													activeClassName="activeNav"
													onClick={ClickEvent}
													className="text-white text-decoration-none bold"
												>
													{prev.t}
												</NavLink>
											</h2>
										</div>
									);
								})}
								<div className="secondHalf d-flex flex-column mt-4 d-sm-none align-items-center">
									<div className="icons_container">
										<a href="" className="text-decoration-none text-dark">
											<FaLinkedinIn
												fontSize="2rem"
												className="icon ms-3 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaFacebookF
												fontSize="2rem"
												className="icon ms-3 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaInstagram
												fontSize="2rem"
												className="icon ms-3 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FaTwitter
												fontSize="2rem"
												className="icon ms-3 p-1 rounded-circle"
											/>
										</a>
										<a href="" className="text-decoration-none text-dark">
											<FiMail
												fontSize="2rem"
												className="icon ms-3 p-1 rounded-circle"
											/>
										</a>
									</div>
									<div className="ms-4 mt-3">
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

export default Sidebar;

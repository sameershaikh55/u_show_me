import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Sidebar = ({ isOpen, ClickEvent }) => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".SideBarContainer");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
		}
	});
	// STICKY FUNCTIONS END
	const data = [
		{ t: "ABOUT US" },
		{ t: "FEATURED SHOWS" },
		{ t: "HYBRID IS THE FUTURE" },
		{ t: "HOW IT WORKS" },
		{ t: "WHO ARE U?" },
		{ t: "FAQ" },
	];
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
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-6 mt-3">
											<h2>
												<NavLink
													exact
													to="/"
													activeClassName="activeNav"
													onClick={ClickEvent}
													className="text-white text-decoration-none"
												>
													{prev.t}
												</NavLink>
											</h2>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

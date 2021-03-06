import React from "react";
import logo from "../assets/images/logo.svg";
import down from "../assets/images/down.svg";
import up from "../assets/images/up.svg";
import hamburger from "../assets/images/hamburger.svg";
import cross from "../assets/images/cross.svg";
import { Link } from "react-router-dom";

// IMPORTING ICONS
import i1 from "../assets/images/shareIcons/i1.svg";
import i2 from "../assets/images/shareIcons/i2.svg";
import i3 from "../assets/images/shareIcons/i3.svg";
import i4 from "../assets/images/shareIcons/i4.svg";
import i5 from "../assets/images/shareIcons/i5.svg";

const Header = ({
	dropdown,
	dropdown2,
	dropdown3,
	second,
	third,
	setIsOpen,
	isOpen,
	on,
	setOn,
}) => {
	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);

			if (true) {
				header.classList.remove("shadow-sm", window.scrollY > 1);
			}
		}
	});
	// STICKY FUNCTIONS END

	// SHARE ICONS DATA
	const data = [
		{
			img: i1,
			link: "https://www.linkedin.com/company/ushowme/",
		},
		{
			img: i2,
			link: "https://www.facebook.com/ushowme.tv",
		},
		{
			img: i3,
			link: "https://www.instagram.com/ushowme/",
		},
		{
			img: i4,
			link: "https://twitter.com/UshowMe_Shows/",
		},
		{
			img: i5,
			link: "mailto:hello@ushowme.tv",
		},
	];

	return (
		<div className="header_container d-flex justify-content-center align-items-center">
			<div className="w-100">
				<div className="container-fluid ps-4 pe-0 w-100">
					<div className="row w-100">
						<div className="col-11 col-lg-12 mx-auto w-100">
							<div className="d-flex justify-content-between w-100">
								<div className="d-flex align-items-center">
									<div className="logo_container2 d-flex align-items-center">
										<Link to="/">
											<img
												className="pointer d-block d-sm-none"
												src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/logo.svg"
												alt=""
											/>
										</Link>
										<div className="d-block d-sm-none text-white spaceMono f14 ms-3 mt-2">
											Beta
										</div>
									</div>
									<div className="logo_container ms-3 ms-sm-0 d-flex align-items-center">
										{(isOpen && (
											<img
												style={{ width: "25px" }}
												src={cross}
												alt="cross"
												className="pointer"
												onClick={() => setIsOpen(false)}
											/>
										)) || (
											<img
												src={hamburger}
												alt="hamburger"
												className="pointer"
												onClick={() => setIsOpen(true)}
											/>
										)}
										<div className="d-flex align-items-center">
											<Link to="/">
												<img
													style={{ width: "10.85rem" }}
													className="pointer ps-4 d-none d-sm-block"
													src="https://s3.eu-west-1.amazonaws.com/landing.ushowme.tv/logo.svg"
													alt=""
												/>
											</Link>
											<div className="d-none d-sm-block text-white spaceMono f14 ms-3 mt-2">
												Beta
											</div>
										</div>
									</div>
								</div>
								<div className="secondHalf d-none d-sm-flex align-items-center">
									<div className="icons_container">
										{data.map((prev, ind) => {
											return (
												<a
													key={ind}
													href={prev.link}
													target="blank"
													className="text-decoration-none text-dark ms-2"
												>
													<img src={prev.img} alt="" />
												</a>
											);
										})}
									</div>
									<div className="select ms-4 spaceMono text-white">
										<ul className="list-unstyled">
											<li
												onClick={() => setOn(!on)}
												className="spaceMono fw-bold d-flex align-items-center pointer"
											>
												{dropdown.t}{" "}
												{(on && (
													<img
														style={{ width: "12px", height: "auto" }}
														src={down}
														alt=""
														className="ms-2"
													/>
												)) || (
													<img
														style={{ width: "12px", height: "auto" }}
														src={up}
														alt=""
														className="ms-2"
													/>
												)}
											</li>
											{on && (
												<div className="position-absolute">
													<li
														onClick={second}
														className="spaceMono fw500 d-flex align-items-center pointer"
													>
														{dropdown2.t} <div></div>
													</li>
													<li
														onClick={third}
														className="spaceMono fw500 d-flex align-items-center pointer"
													>
														{dropdown3.t} <div></div>
													</li>
												</div>
											)}
										</ul>
									</div>
									<div
										style={{ height: (on && "140px") || "0px" }}
										className="select_bg"
									></div>
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

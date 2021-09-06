import React from "react";
import { Link } from "react-scroll";

// IMPORTING ICONS
import i1 from "../assets/images/shareIcons/i1.svg";
import i2 from "../assets/images/shareIcons/i2.svg";
import i3 from "../assets/images/shareIcons/i3.svg";
import i4 from "../assets/images/shareIcons/i4.svg";
import i5 from "../assets/images/shareIcons/i5.svg";
import down from "../assets/images/down.svg";
import up from "../assets/images/up.svg";

const Sidebar = ({
	isOpen,
	ClickEvent,
	dropdown,
	dropdown2,
	dropdown3,
	second,
	third,
	on,
	setOn,
	dataHome,
}) => {
	const { sideBar, sideBar2 } = dataHome;

	// STICKY FUNCTIONS START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".SideBarContainer");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
			header.classList.toggle("shadow-sm", window.scrollY > 1);
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
		<div
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			{/* DESKTOP START */}
			<div className="w-100 d-none d-md-block">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{sideBar.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 col-sm-6 text-center text-sm-start"
										>
											<h2>
												<Link
													to={
														(i === 0 && "about") ||
														(i === 1 && "feature") ||
														(i === 2 && "hybrid") ||
														(i === 3 && "hiw") ||
														(i === 4 && "wru") ||
														(i === 5 && "faq")
													}
													smooth={true}
													duration={600}
													spy={true}
													offset={-100}
													onClick={() => ClickEvent(false)}
													className="text-white text-decoration-none NeueMachina fw-bolder pointer NeueMachina"
												>
													{prev.t}
												</Link>
											</h2>
										</div>
									);
								})}
								{/* <div className="secondHalf d-flex flex-column mt-4 d-sm-none align-items-center">
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
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* DESKTOP START */}

			{/* MOBILE START */}
			<div className="sideMobile w-100 d-block d-md-none">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{sideBar2.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 col-sm-6 text-center text-sm-start mb-4"
										>
											<h2>
												<Link
													to={
														(i === 0 && "about") ||
														(i === 1 && "feature") ||
														(i === 2 && "hybrid") ||
														(i === 3 && "hiw") ||
														(i === 4 && "wru") ||
														(i === 5 && "faq")
													}
													smooth={true}
													duration={600}
													spy={true}
													offset={-100}
													onClick={() => ClickEvent(false)}
													className="text-white text-decoration-none NeueMachina fw-bolder pointer NeueMachina"
												>
													{prev.t}
												</Link>
											</h2>
										</div>
									);
								})}
								<div className="secondHalf d-flex flex-column mt-4 d-sm-none align-items-center">
									<div className="icons_container d-flex justify-content-evenly w-100">
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
									<div className="select mt-4 pt-2 h2 spaceMono text-white">
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
														className="spaceMono fw-bold d-flex align-items-center pointer"
													>
														{dropdown2.t} <div></div>
													</li>
													<li
														onClick={third}
														className="spaceMono fw-bold d-flex align-items-center pointer"
													>
														{dropdown3.t} <div></div>
													</li>
												</div>
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* DESKTOP START */}
		</div>
	);
};

export default Sidebar;

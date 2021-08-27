import React, { useEffect } from "react";

const WHO = () => {
	useEffect(() => {
		var menu = document.querySelector(".menu"),
			menuLink = document.querySelectorAll(".menu-link.sub");

		menuLink.forEach(function (el) {
			el.addEventListener("click", openSubmenu);
		});

		function openMenu() {
			if (menu.classList.contains("open")) {
				menu.classList.add("close");

				setTimeout(function () {
					menu.classList.remove("open");
				}, 1300);
			} else {
				menu.classList.remove("close");
				menu.classList.add("open");
			}
		}

		function openSubmenu(event) {
			if (event.currentTarget.classList.contains("active")) {
				event.currentTarget.classList.remove("active");
			} else {
				event.currentTarget.classList.add("active");
			}
		}
	}, []);
	return (
		<div className="who_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<nav>
								<ul className="menu">
									<li className="menu-link">
										<a href="#0" className="text-item">
											About
										</a>
									</li>
									<li className="menu-link sub">
										<a href="#0" className="text-item">
											Clients<span className="icon"></span>
										</a>
										<ul className="submenu">
											<li className="sub-item">
												<a href="#0">Burger King</a>
											</li>
											<li className="sub-item">
												<a href="#0">Southwest Airlines</a>
											</li>
											<li className="sub-item">
												<a href="#0">Levi Strauss</a>
											</li>
										</ul>
									</li>
									<li className="menu-link sub">
										<a href="#0" className="text-item">
											Services<span className="icon"></span>
										</a>
										<ul className="submenu">
											<li className="sub-item">
												<a href="#0">Print Design</a>
											</li>
											<li className="sub-item">
												<a href="#0">Web Design</a>
											</li>
											<li className="sub-item">
												<a href="#0">Mobile App Development</a>
											</li>
										</ul>
									</li>
									<li className="menu-link">
										<a href="#0" className="text-item">
											Contact
										</a>
									</li>
								</ul>
							</nav>
							<article>
								<h1>
									Navigation with Sub-Navigation using CSS Transitions and
									Animations
								</h1>
								<p>
									Made for Codepen Challenge #cpc-fork-nav #codepenchallenge
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WHO;

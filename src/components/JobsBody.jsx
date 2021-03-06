import React from "react";
import eye from "../assets/images/eye.svg";

const JobsBody = ({ dataHome }) => {
	const { h1, paras, h2, jobBtn, job } = dataHome;
	console.log(job);
	return (
		<div className="privacyBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="fw-bold	 NeueMachina display-5 color8">{h1}</div>

							<div className="px-3">
								<div className="NeueMachina mt-4 fw500">
									{paras.map((prev, ind) => {
										return <div key={ind}> {prev.p} </div>;
									})}
								</div>
							</div>

							<div className="NeueMachina text-white px-3 mt-5">
								{h2}

								{[1, 1].map((prev, ind) => {
									return (
										<div key={ind} className="vacancy_container py-4 px-3 mt-5">
											<h2 className="fw-bold my-4">{job[0].h1}</h2>
											{job[0].p.map((prev, i) => {
												return <p key={i}>{prev}</p>;
											})}
											<div className="d-flex justify-content-center">
												<a
													target="blank"
													className="text-decoration-none"
													href="https://app.ushowme.tv/"
												>
													<button className="btnS hero_btn d-flex align-items-center bg3 text-white border-0 ps-1 pe-3 mt-4 py-1 NeueMachina fw500">
														<img src={eye} alt="arrow" className="ms-2 me-2" />{" "}
														{jobBtn}
													</button>
												</a>
											</div>
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

export default JobsBody;

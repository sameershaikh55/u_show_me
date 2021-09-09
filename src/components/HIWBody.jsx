import React from "react";

const HIWBody = ({ dataHome }) => {
	const { h1, h2, hwiData, cBtn } = dataHome;
	return (
		<div className="hiw_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 text-white">
							<h1 className="fw-bold mb-0 NeueMachina">{h1}</h1>
							<h3 className="NeueMachina">
								<span className="underlineAbout pb-5 fw-light">{h2}</span>
							</h3>
						</div>

						<div className="col-12 mt-4">
							<div className="row">
								{hwiData.map((prev, i) => {
									const { t, d } = prev;
									return (
										<div className="col-md-6 text-white mt-5 pt-3">
											<h2 className="NeueMachina fw-bold">
												{i + 1}. {t}
											</h2>
											<div className="mt-5">
												{d.map((pre, ind) => {
													return (
														<p className="spaceMono" key={ind}>
															{pre}
														</p>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="col-12 d-flex justify-content-center mt-5">
							<a href="mailto:hello@ushowme.tv">
								<button className="hero_btn d-flex align-items-center btn1 purpleBg text-white border-0 px-2 mt-4 py-1 NeueMachina fw500">
									{cBtn}
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HIWBody;

import React from "react";

const Newsletter = ({ dataHome }) => {
	const { newsletter1, newsletterBtn } = dataHome;

	return (
		<div className="newsletter_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
								<p className="mb-0 text-white NeueMachina fw600">
									{newsletter1}
								</p>
								<div className="inp_container ms-4 mt-3 mt-md-0">
									<input
										type="text"
										name=""
										id=""
										placeholder="Name"
										className="NeueMachina"
									/>
								</div>
								<div className="inp_container ms-4 mt-3 mt-md-0">
									<input
										type="text"
										name=""
										id=""
										placeholder="E-mail"
										className="NeueMachina"
									/>
								</div>
								<div className="ms-4 mt-3 text-center mt-md-0">
									<button className="NeueMachina fw600 border-0 px-4 px-sm-2 py-1 py-sm-0 me-4 me-sm-0 text-white h-100 py-1 f16">
										{newsletterBtn}
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

export default Newsletter;

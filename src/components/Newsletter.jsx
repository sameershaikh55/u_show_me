import React from "react";

const Newsletter = ({ dataHome }) => {
	const { newsletter1 } = dataHome;

	return (
		<div className="newsletter_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-center align-items-center">
								<p className="mb-0 text-white">{newsletter1}</p>
								<div className="ms-4">
									<input type="text" name="" id="" placeholder="Name" />
								</div>
								<div className="ms-4">
									<input type="text" name="" id="" placeholder="E-mail" />
								</div>
								<div className="ms-4">
									<button className="border-0 px-2 text-white h-100 py-1 rounded-1">
										Send
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

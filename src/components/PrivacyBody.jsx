import React from "react";

const PrivacyBody = ({ dataHome }) => {
	const {
		h1,
		topPs,
		collectData: { h2, innerData },
	} = dataHome;
	return (
		<div className="privacyBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h1 className="fw-bold NeueMachina display-5 color8">{h1}</h1>

							<div className="px-3">
								<div className="NeueMachina mt-4 fw500">
									{topPs.map((prev) => {
										return <> {prev.p} </>;
									})}
								</div>
							</div>

							<div className="NeueMachina px-3">
								<h5 className="fw-bold mb-0">{h2}</h5>

								{innerData.map((prev, ind) => {
									const { t, d } = prev;
									return (
										<div key={ind}>
											<h5 className="fw-bold my-4">{t}</h5>
											<div className="fw500">{d}</div>
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

export default PrivacyBody;

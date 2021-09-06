import React from "react";

const TermsBody = ({ dataHome }) => {
	const {
		h1,
		topData,
		list: { t, nList },
		bodyList,
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
									{topData.map((prev) => {
										return <> {prev.p} </>;
									})}
								</div>
							</div>

							<div className="px-3 mt-5">
								<h6 className="NeueMachina fw-bold">{t}</h6>
								<ol className="NeueMachina mt-4 fw500">
									{nList.map((prev) => {
										return <li className="mb-3"> {prev} </li>;
									})}
								</ol>
							</div>

							<div className="NeueMachina px-3 mt-5">
								{bodyList.map((prev, ind) => {
									const { t, d } = prev;
									return (
										<div key={ind}>
											<h4 className="fw-bold my-4">{t}</h4>
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

export default TermsBody;

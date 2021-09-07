import React from "react";
import AccordionC from "./AccordionC";

const FaqBody = ({ dataHome, colorr }) => {
	return (
		<div className="faq_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h1
								style={{ color: colorr }}
								className="fw-bold NeueMachina display-4"
							>
								{dataHome.h1}
							</h1>

							<div className="row mt-4 mt-md-5 bg-white">
								<div className="col-12 bg-white">
									{dataHome.faqList.map((prev, i) => {
										return (
											<div key={i}>
												<AccordionC prev={prev} colorr={colorr} />
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqBody;

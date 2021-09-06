import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FiPlus } from "react-icons/fi";

const FaqBody = ({ dataHome, colorr }) => {
	return (
		<div className="faq_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<h1
						style={{ color: colorr }}
						className="fw-bold NeueMachina display-4"
					>
						{dataHome.h1}
					</h1>

					<div className="row mt-4">
						<div className="col-12">
							{/* {dataHome.faqList.map((prev, i) => {
								return (
									<div class="accordion" id="accordionExample">
										<div class="accordion-item">
											<h2 class="accordion-header" id={`heading${i}`}>
												<button
													style={{ background: colorr }}
													class="accordion-button text-white NeueMachina"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={`#collapse${i}`}
													aria-expanded="true"
													aria-controls={`collapse${i}`}
												>
													{prev.q}
												</button>
											</h2>
											<div
												id={`collapse${i}`}
												class="accordion-collapse collapse spaceMono"
												aria-labelledby={`heading${i}`}
												data-bs-parent="#accordionExample"
											>
												<div class="accordion-body">{prev.a}</div>
											</div>
										</div>
									</div>
								);
							})} */}
							{dataHome.faqList.map((prev, i) => {
								return (
									<Accordion>
										<AccordionSummary
											style={{ background: colorr, color: "#fff" }}
											expandIcon={
												<FiPlus
													className="icon1 pointer"
													fontSize="2rem"
													color="#fff"
												/>
											}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<Typography className="NeueMachina fw600">
												{prev.q}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography className="spaceMono fw600">
												{prev.a}
											</Typography>
										</AccordionDetails>
									</Accordion>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqBody;

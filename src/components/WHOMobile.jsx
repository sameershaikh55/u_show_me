import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FiPlus } from "react-icons/fi";
import WhoForm from "./WhoForm";

const WHOMobile = ({ dataHome }) => {
	const {
		who1under,
		slide1T,
		slide1T2,
		slide1D,
		slide2T,
		slide2T2,
		slide2D,
		slide3T,
		slide3T2,
		slide3D,
		slide4T,
		slide4T2,
		slide4D,
		present,
		send,
		present2,
		response,
	} = dataHome;

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={
						<FiPlus className="icon1 pointer" fontSize="2rem" color="#fff" />
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className="d-flex align-items-center justify-content-start w-100">
						<div className="d-flex align-items-center justify-content-start w-100">
							<h4 className="mb-0 NeueMachina">{who1under + "n"}</h4>
							<h3 className="fw-bold ms-4 mb-0 NeueMachina">{slide1T}</h3>
						</div>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<div className="WHO_detail px-2 text-white">
							<h2 className="mb-4 NeueMachina">{slide1T2}</h2>
							<p className="mb-4 spaceMono">{slide1D}</p>
							<WhoForm
								mobile
								send={send}
								response={response}
								formNo={1}
								present={present}
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={
						<FiPlus className="icon1 pointer" fontSize="2rem" color="#fff" />
					}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className="d-flex align-items-center justify-content-start w-100">
						<div className="d-flex align-items-center justify-content-start w-100">
							<h4 className="mb-0 NeueMachina">{who1under}</h4>
							<h3 className="fw-bold ms-4 mb-0 NeueMachina">{slide2T}</h3>
						</div>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<div className="WHO_detail text-white">
							<h2 className="mb-4 NeueMachina">{slide2T2}</h2>
							<p className="spaceMono">{slide2D}</p>

							<WhoForm
								mobile
								send={send}
								response={response}
								formNo={2}
								present={present}
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={
						<FiPlus className="icon1 pointer" fontSize="2rem" color="#fff" />
					}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className="d-flex align-items-center justify-content-start w-100">
						<div className="d-flex align-items-center justify-content-start w-100">
							<h4 className="mb-0 NeueMachina">{who1under}</h4>
							<h3 className="fw-bold ms-4 mb-0 NeueMachina">{slide3T}</h3>
						</div>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<div className="WHO_detail px-2 text-white">
							<h2 className="mb-4 NeueMachina">{slide3T2}</h2>
							<p className="spaceMono">{slide3D}</p>

							<WhoForm
								mobile
								send={send}
								response={response}
								formNo={3}
								present={present}
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={
						<FiPlus className="icon1 pointer" fontSize="2rem" color="#fff" />
					}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className="d-flex align-items-center justify-content-start w-100">
						<div className="d-flex align-items-center justify-content-start w-100">
							<h4 className="mb-0 NeueMachina">{who1under}</h4>
							<h3 className="fw-bold ms-4 mb-0 NeueMachina">{slide4T}</h3>
						</div>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<div className="WHO_detail px-2 text-white">
							<h2 className="mb-4 NeueMachina">{slide4T2}</h2>
							<p className="mb-4 spaceMono">{slide4D}</p>

							<WhoForm
								mobile
								send={send}
								response={response}
								formNo={0}
								present={present2}
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default WHOMobile;

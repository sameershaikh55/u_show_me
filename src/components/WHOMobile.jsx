import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FiPlus } from "react-icons/fi";

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
						<div className="WHO_detail mobile px-2 text-white">
							<h2 className="mb-4">{slide1T2}</h2>
							<p className="mb-4">{slide1D}</p>
							<p> {present} </p>

							<div className="d-flex flex-column align-items-end mt-4">
								<div className="d-flex flex-column w-100">
									<input type="text" name="" id="" placeholder="Name" />
									<input
										type="text"
										name=""
										id=""
										placeholder="E—mail"
										className="mt-3"
									/>
								</div>
								<div className="ms-3 mt-3">
									<button className="btnS NeueMachina fw600">{send}</button>
								</div>
							</div>
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
						<div className="WHO_detail mobile pxxt-white">
							<h2 className="mb-4">{slide2T2}</h2>
							<p>{slide2D}</p>
							<p className="mt-4">{present}</p>

							<div className="d-flex flex-column align-items-end mt-4">
								<div className="d-flex flex-column w-100">
									<input type="text" name="" id="" placeholder="Name" />
									<input
										type="text"
										name=""
										id=""
										placeholder="E—mail"
										className="mt-3"
									/>
								</div>
								<div className="ms-3 mt-3">
									<button className="btnS NeueMachina fw600">{send}</button>
								</div>
							</div>
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
						<div className="WHO_detail mobile px-2 text-white">
							<h2 className="mb-4">{slide3T2}</h2>
							<p>{slide3D}</p>
							<p className="mt-4">{present}</p>

							<div className="d-flex flex-column align-items-end mt-4">
								<div className="d-flex flex-column w-100">
									<input type="text" name="" id="" placeholder="Name" />
									<input
										type="text"
										name=""
										id=""
										placeholder="E—mail"
										className="mt-3"
									/>
								</div>
								<div className="ms-3 mt-3">
									<button className="btnS NeueMachina fw600">{send}</button>
								</div>
							</div>
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
						<div className="WHO_detail mobile px-2 text-white">
							<h2 className="mb-4">{slide4T2}</h2>
							<p className="mb-4">{slide4D}</p>
							<p>{present2}</p>

							<div className="d-flex flex-column align-items-end mt-4">
								<div className="d-flex flex-column w-100">
									<input type="text" name="" id="" placeholder="Name" />
									<input
										type="text"
										name=""
										id=""
										placeholder="E—mail"
										className="mt-3"
									/>
								</div>
								<div className="ms-3 mt-3">
									<button className="btnS NeueMachina fw600">{send}</button>
								</div>
							</div>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default WHOMobile;

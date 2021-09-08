import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hybrid = ({ dataHome }) => {
	const { hybH, hybP, who1, who2 } = dataHome;
	return (
		<div id="hybrid" className="hybrid_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto">
							<h1 className="text-white f54 underlineAbout NeueMachina fw600 pb-4">
								{hybH}
							</h1>

							<div className="mt-4 para spaceMono f16">
								{hybP.map((prev, i) => {
									return (
										<p
											className={`text-white f18 ${
												(i === 2 && "mb-0") || "mb-4"
											}`}
											key={i}
										>
											{prev}
										</p>
									);
								})}
							</div>

							<div id="wru" className="WHO_cont">
								<p className="color5 mb-0 f19 spaceMono">{who1}</p>
								<h1 className="text-white f54 underlineAbout NeueMachina d-flex pb-5 fw600">
									{who2}{" "}
									<AiOutlineArrowDown className="d-none d-sm-block ms-5 color5 h1" />
								</h1>
								<AiOutlineArrowDown
									className="arrowLeft d-block d-sm-none color5"
									fontSize="3.5rem"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hybrid;

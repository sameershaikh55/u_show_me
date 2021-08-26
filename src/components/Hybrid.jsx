import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hybrid = ({ dataHome }) => {
	const { hybH, hybP, who1, who2 } = dataHome;
	return (
		<div className="hybrid_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-white f50 underlineAbout pb-4">{hybH}</h1>

							<div className="mt-4 para">
								{hybP.map((prev, i) => {
									return (
										<p className={`text-white ${i === 2 && "mb-0"}`} key={i}>
											{prev}
										</p>
									);
								})}
							</div>

							<div className="WHO_cont">
								<p className="color5 mb-0">{who1}</p>
								<h1 className="text-white f50 underlineAbout pb-5">
									{who2} <AiOutlineArrowDown className="ms-5 color5 h1" />
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hybrid;

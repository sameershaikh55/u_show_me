import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const AccordionC = ({ prev, colorr }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className="custom_accordion my-4 bg-white">
			<div>
				<div
					onClick={() => setCollapsed(!collapsed)}
					className="d-flex align-items-center pointer"
				>
					<h5
						style={{
							background: (collapsed && colorr) || "#E1E1E1",
							color: (collapsed && "#fff") || "#000",
							transition: "0.4s",
						}}
						className="NeueMachina fw500 w-100 py-2 px-3 mb-0"
					>
						{prev.q}
					</h5>
					<FiPlus
						style={{
							transform: collapsed && "rotate(46deg)",
							transition: "0.4s",
						}}
						className="icon1 pointer"
						fontSize="2rem"
						color={colorr}
					/>
				</div>
				<div
					style={{
						transition: "0.4s",
						height: (collapsed && "auto") || "0px",
						overflowY: (collapsed && "initial") || "hidden",
					}}
					className="ps-2 pe-4 ps-md-3 pe-md-5 mb-0"
				>
					<p
						id="content"
						style={{
							opacity: (collapsed && "1") || "0",
							transitionDelay: collapsed && "0.8s",
							transition: collapsed && "0.8s",
						}}
						className="spaceMono fw500 py-4 mb-0"
					>
						{prev.a}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionC;

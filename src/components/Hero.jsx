import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = ({ dataHome }) => {
	return (
		<div className="hero_container d-flex justify-content-center align-items-end align-items-sm-center">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-lg-6 mx-auto">
							<h1 className="bold text-white underline pb-4">
								{dataHome.hero}
							</h1>
							<button className="bg3 text-white border-0 ps-1 pe-2 mt-4 py-1 bold">
								<BiRightArrowAlt fontSize="1.2rem" /> {dataHome.heroBtn}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

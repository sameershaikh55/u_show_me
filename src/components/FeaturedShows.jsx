import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const FeaturedShows = ({ dataHome }) => {
	const { feature1, feature2 } = dataHome;

	return (
		<div className="feature_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex align-items-start">
								<h1 className="text-white f50 underlineAbout pb-4 me-5">
									{feature1}
								</h1>
								<button className="bg3 text-white border-0 ps-1 pe-2 mt-4">
									<BiRightArrowAlt fontSize="1.2rem" /> {feature2}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedShows;

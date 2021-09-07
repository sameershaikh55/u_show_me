import React from "react";

const CommonHero = ({ hero }) => {
	return (
		<div className={`commonHero_container ${(hero === "FAQ" && hero) || ""}`}>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h1 className="fw-bold NeueMachina text-white display-4">
								<span className="underlineAbout pb-4">{hero}</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommonHero;

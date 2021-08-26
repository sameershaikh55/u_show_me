import React from "react";
import logo from "../assets/images/logo2.svg";

const News = ({ dataHome }) => {
	const { news } = dataHome;

	return (
		<div className="news_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<img src={logo} alt="" />
							<h1 className="text-white f50 underlineAbout pb-4 mt-2">
								{news}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;

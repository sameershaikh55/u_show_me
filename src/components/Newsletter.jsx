import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Newsletter = ({ dataHome }) => {
	const { newsletter1, newsletterBtn } = dataHome;
	const [getResponse, SetGetResponse] = useState();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		const { name, email } = data;

		// POST API FOR DATA SENDING
		const headers = {
			name: name,
			mail: email,
		};
		axios
			.post("https://virtserver.swaggerhub.com/ushowmetv/api/1.1/subscribe", {
				headers,
			})
			.then((response) => SetGetResponse(response));
		reset();
	};
	console.log(getResponse);
	return (
		<div className="newsletter_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						{(getResponse && (
							<div className="col-11 col-md-12 mx-auto text-center d-flex flex-column flex-md-row justify-content-center">
								<p className="mb-0 text-white NeueMachina fw600">
									{newsletter1}
								</p>
								<p className="mt-4 mt-md-0 ms-md-2 mb-0 text-white NeueMachina fw600">
									Thank you for your subscription, you will be the first to know
									new awesome shows
								</p>
							</div>
						)) || (
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="col-11 col-md-12 mx-auto"
							>
								<div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
									<p className="mb-0 text-white NeueMachina fw600">
										{newsletter1}
									</p>
									<div className="inp_container ms-4 mt-3 mt-md-0">
										<input
											style={{
												border: (errors.name && "1px solid #ff2a2a") || "none",
											}}
											{...register("name", {
												required: true,
											})}
											type="text"
											placeholder="Name"
											className="NeueMachina"
										/>
									</div>
									<div className="inp_container ms-4 mt-3 mt-md-0">
										<input
											style={{
												border: (errors.email && "1px solid #ff2a2a") || "none",
											}}
											{...register("email", {
												required: true,
												pattern:
													/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											})}
											type="text"
											placeholder="E-mail"
											className="NeueMachina"
										/>
									</div>
									<div className="ms-4 mt-3 text-center mt-md-0">
										<button className="NeueMachina fw600 border-0 px-4 px-sm-2 py-1 py-sm-0 me-4 me-sm-0 text-white h-100 py-1 f16">
											{newsletterBtn}
										</button>
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;

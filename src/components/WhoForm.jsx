import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const WhoForm = ({ send, formNo, present, response }) => {
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
			subscription_type: formNo,
		};
		axios
			.post("https://virtserver.swaggerhub.com/ushowmetv/api/1.1/subscribe", {
				headers,
			})
			.then((response) => SetGetResponse(response));
		reset();
	};

	return (
		<div className="mt-4">
			<p
				style={{ transition: "0.6s" }}
				className="fw-bold NeueMachina mt-4 f19"
			>
				{present} {getResponse && getResponse.status === 200 && response}
			</p>
			<form
				style={{
					opacity: (getResponse && "0") || "1",
					transition: "0.6s",
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="d-flex flex-column align-items-start">
					<div className="position-relative">
						<input
							style={{
								border: (errors.name && "1px solid #ff2a2a") || "none",
							}}
							{...register("name", {
								required: true,
							})}
							disabled={getResponse && true}
							type="text"
							placeholder="Name"
							className="f19"
						/>
						<div className="redColor f14 fw-bold position-absolute end-0">
							{errors.name && errors.name.type === "required" && "Required*"}
						</div>
					</div>
					<div className="d-flex align-items-end mt-2">
						<div className="position-relative">
							<input
								style={{
									border: (errors.email && "1px solid #ff2a2a") || "none",
								}}
								{...register("email", {
									required: true,
									pattern:
										/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
								disabled={getResponse && true}
								type="text"
								placeholder="E-mail"
								className="mt-3 f19"
							/>
							<div className="redColor f14 fw-bold position-absolute end-0">
								{errors.email &&
									errors.email.type === "required" &&
									"Required*"}
								{errors.email &&
									errors.email.type === "pattern" &&
									"Invalid Email*"}
							</div>
						</div>
						<div className="ms-3">
							<button
								disabled={getResponse && true}
								type="submit"
								className="btnS NeueMachina fw600"
							>
								{send}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default WhoForm;

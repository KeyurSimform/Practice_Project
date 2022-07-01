import "../SignIn/SignIn.style.scss";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";

const SignIn = () => {
	const [attribute, setAttribute] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setAttribute({ email: "", password: "" });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
        // console.log(event.target.value);
		setAttribute({ [name]: value });
	};

	return (
		<div className="sigin-in">
			<h2>I already have and account</h2>
			<span>Sign In with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={attribute.email}
					label="email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					handleChange={handleChange}
					value={attribute.password}
					label="password"
					required
				/>
			</form>
		</div>
	);
};

export default SignIn;

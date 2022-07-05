import "../SignIn/SignIn.style.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { signInWithGoogle } from "../../FireBase/firebase.utils";

const SignIn = () => {
	const [attribute, setAttribute] = useState({
		email: "",
		password: ""
	});
	// console.log(attribute);
	const handleSubmit = (event) => {
		event.preventDefault();
		setAttribute(() => {
			return {email: "", password:"" };
		});
		// setAttribute((prev)=>return{{...prev,email:"", password:""}});
		console.log("Submit");
		console.log(attribute);

	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setAttribute((prev) => {
			return { ...prev, [name]: value };
		});
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
				<CustomButton type="submit">Sign In</CustomButton>
				<br></br>
				<CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>

			</form>
		</div>
	);
};

export default SignIn;

import "../SignIn/SignIn.style.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { auth, signInWithGoogle } from "../../FireBase/firebase.utils";

const SignIn = () => {
	const [attribute, setAttribute] = useState({
		email: "",
		password: "",
	});
	// console.log(attribute);
	const handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = attribute;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setAttribute({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}

		setAttribute(() => {
			return { email: "", password: "" };
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
		<div className="sign-in">
			<h2>I already have and account</h2>
			<span>Sign In with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={attribute.email}
					label="Email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					handleChange={handleChange}
					value={attribute.password}
					label="Password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<br></br>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

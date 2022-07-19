import "../SignUp/SignUp.style.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, creatUserProfileDocument } from "../../FireBase/firebase.utils";
import { useState } from "react";

const SignUp = () => {
	const [userSignUp, setUserSignUp] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = userSignUp;
		if (password !== confirmPassword) {
			alert("Passwords are not matching");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await creatUserProfileDocument(user, { displayName });
			setUserSignUp({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUserSignUp((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const { displayName, email, password, confirmPassword } = userSignUp;

	return (
		<div className="sign-up">
			<h2 className="title">I don't have account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;

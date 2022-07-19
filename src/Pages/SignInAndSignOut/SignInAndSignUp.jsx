import "../SignInAndSignOut/SignInAndSignUp.style.scss";
import SignIn from "../../Componenet/SignIn/SignIn";
import SignUp from "../../Componenet/SignUp/SignUp";

const SignInAndSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			{/* SIGN IN */}
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUp;

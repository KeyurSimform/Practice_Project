import "./App.css";
import HomePage from "../src/Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/ShopPage/Shop";
import Header from "./Componenet/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignOut/SignInAndSignUp";
import HatsPage from "./Pages/HatsPage/HatsPage";
import { auth } from "./FireBase/firebase.utils";
import { useEffect, useState } from "react";
import { creatUserProfileDocument } from "./FireBase/firebase.utils";

function App() {
	const [users, setUsers] = useState({
		currentUser: null,
	});

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			// creatUserProfileDocument(users);
			if (userAuth) {
				const userRef = await creatUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setUsers({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					}, ()=>{console.log(users.currentUser)});
				});
			}
			setUsers({currentUser:userAuth})
			// console.log(users);
		});
	}, []);
	return (
		<div>
			<Header currentUser={users.currentUser} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/signin" element={<SignInAndSignUp />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	);
}

export default App;

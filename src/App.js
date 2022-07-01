import "./App.css";
import HomePage from "../src/Pages/HomePage/HomePage";
import HatsPage from "./Pages/HatsPage/HatsPage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/ShopPage/Shop";
import Header from "./Componenet/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignOut/SignInAndSignUp"

function App() {	
	return (
		<div>
		<Header/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/shop" element={<Shop/>}/>
				<Route path="/signin" element={<SignInAndSignUp/>}/>
			</Routes>
		</div>
	);
}

export default App;

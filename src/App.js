import "./App.css";
import HomePage from "../src/Pages/HomePage/HomePage";
import HatsPage from "./Pages/HatsPage/HatsPage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/ShopPage/Shop";

function App() {	
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/shop" element={<Shop/>}/>
			</Routes>
		</div>
	);
}

export default App;

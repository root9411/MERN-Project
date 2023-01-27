import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomeScreen from "./components/Main/screens/HomeScreen";
import ProductScreen from "./components/Main/screens/ProductScreen";
import CartScreen from "./components/Main/screens/CartScreen";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<HomeScreen />} />}
			{user && <Route path="/product/:id" exact element={<ProductScreen />} />}
			{user && <Route path="/cart" exact element={<CartScreen />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />			
		</Routes>
	);
}

export default App;
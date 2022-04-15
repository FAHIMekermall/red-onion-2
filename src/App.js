import { Routes, Route } from "react-router-dom"
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast"
import Dinner from "./Pages/Home/Foods/Dinner/Dinner"
import Lunch from "./Pages/Home/Foods/Lunch/Lunch"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Footer from "./Shared/Footer/Footer"
import Header from "./Shared/Header/Header"

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route
						path="/foods-breakfast"
						element={<Breakfast></Breakfast>}
					></Route>
					<Route path="/" element={<Lunch />}></Route>
					<Route path="/foods-dinner" element={<Dinner />}></Route>
				</Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App

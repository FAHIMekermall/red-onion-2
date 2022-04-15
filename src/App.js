import { Routes, Route } from "react-router-dom"
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast"
import Home from "./Pages/Home/Home"
import Footer from "./Shared/Footer/Footer"
import Header from "./Shared/Header/Header"

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/foods-breakfast" element={<Breakfast></Breakfast>}></Route>
					<Route path="/" element={<Breakfast></Breakfast>}></Route>
				</Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App

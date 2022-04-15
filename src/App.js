import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Footer from "./Shared/Footer/Footer"
import Header from "./Shared/Header/Header"

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App

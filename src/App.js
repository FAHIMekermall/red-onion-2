import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Shared/Header/Header"

function App() {
	return (
		<div>
      <Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	)
}

export default App

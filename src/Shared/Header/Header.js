import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo/logo2.png"
import { RiShoppingCartLine } from "react-icons/ri"

const Header = () => {
	return (
		<header className="h-[80px] flex justify-between px-32 items-center bg-white sticky top-0">
			<nav>
				<Link to="/">
					<img className="h-[50px]" src={logo} alt="" />
				</Link>
			</nav>
			<nav className="flex items-center">
				<Link className="ml-8 font-light text-xl" to="/cart">
					<RiShoppingCartLine size={"1.5em"} />
				</Link>
				<Link className="ml-8 font-light text-xl" to="/login">
					Login
				</Link>
				<Link
					className="ml-8 font-light text-xl bg-red-600 px-6 py-2 rounded-full text-white"
					to="/sign-up"
				>
					Sign up
				</Link>
			</nav>
		</header>
	)
}

export default Header

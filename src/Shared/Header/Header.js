import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo/logo2.png"
import { RiShoppingCartLine } from "react-icons/ri"
import { onAuthStateChanged, signOut } from "firebase/auth"
import auth from "../../firebase.init"

const Header = () => {
	const [user, setUser] = useState()

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user)
		} else {
			setUser(null)
		}
	})
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
				{!user?.email ? (
					<div>
						<Link className="ml-8 font-light text-xl" to="/login">
							Login
						</Link>
						<Link
							className="ml-8 font-light text-xl bg-red-600 px-6 py-2 rounded-full text-white"
							to="/register"
						>
							Sign up
						</Link>
					</div>
				) : (
					<button
						onClick={() =>
							signOut(auth).catch(() => console.log(""))
						}
						className="ml-8 font-light text-xl bg-red-600 px-6 py-2 rounded-full text-white"
					>
						Sign out
					</button>
				)}
			</nav>
		</header>
	)
}

export default Header

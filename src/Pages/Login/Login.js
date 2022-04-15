import React, { useState } from "react"
import logo from "../../assets/logo/logo2.png"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SocialLogin from "../../Shared/Social-Login/SocialLogin"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase.init"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [showPass, setShowPass] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	const [user, setUser] = useState(null)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user)
		} else {
			setUser(null)
		}
	})

	if (user) {
		navigate(from, { replace: true })
	}
	const notify = (text) => toast(text);
	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => console.log(user))
			.catch((error) => notify(error.message))
	}

	return (
		<div className="flex flex-col items-center min-h-[100vh]">
			<ToastContainer/>
			<form onSubmit={handleLogin} className="flex flex-col w-[560px]">
				<img
					className="mt-16 mb-8 mx-auto"
					src={logo}
					width={"200px"}
					height={"200px"}
					alt=""
					draggable="false"
				/>
				<p className="text-center mb-6 text-4xl text-red-600">Login</p>
				<input
					className="w-full focus:outline-none bg-slate-100  mb-4 h-16 pl-2 rounded-lg"
					type="email"
					name="email"
					placeholder="Email"
					id="email"
				/>
				<p className="relative flex items-center mb-4">
					<input
						className="w-full block focus:outline-none bg-slate-100 h-16 pl-2 rounded-lg"
						type={!showPass ? "password" : "text"}
						placeholder="Password"
						name="password"
						id="password"
					/>
					<span className="absolute right-5">
						{!showPass ? (
							<AiFillEyeInvisible
								className="cursor-pointer"
								size={"1.5em"}
								onClick={() => setShowPass(true)}
							/>
						) : (
							<AiFillEye
								className="cursor-pointer"
								size={"1.5em"}
								onClick={() => setShowPass(false)}
							/>
						)}
					</span>
				</p>
				<input
					className="cursor-pointer bg-red-600 rounded my-4 h-16 text-2xl text-white"
					type="submit"
					value="Login"
				/>
			</form>
			<Link className="text-red-600" to="/register">
				Don't have an account?
			</Link>
			<div className="w-[560px]">
				<SocialLogin></SocialLogin>
			</div>
		</div>
	)
}

export default Login

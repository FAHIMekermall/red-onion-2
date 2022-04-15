import React, { useEffect, useState } from "react"
import SocialLogin from "../../Shared/Social-Login/SocialLogin"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import logo from "../../assets/logo/logo2.png"
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth"
import auth from "../../firebase.init"

const Register = () => {
	const [showPass, setShowPass] = useState(false)
	const [showConfirmPass, setShowConfirmPass] = useState(false)
	const [error, setError] = useState()
	useEffect(() => {
		setTimeout(() => setError(""), [5000])
	}, [error])
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"
	const [user, setUser] = useState()
	const navigate = useNavigate()

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

	const handleSubmit = async (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const password = event.target.password.value
		const confirmPassword = event.target.confirmPassword.value
		if (password !== confirmPassword) {
			setError("Password mismatch")
			return
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((user) => {
				sendEmailVerification(auth.currentUser)
					.then(() => alert("email verification send"))
					.catch((error) => console.log(error))
				updateProfile(auth.currentUser, {
					displayName: name,
				})
			})
			.catch((error) => console.log(error))
	}

	return (
		<div>
			<div className="flex flex-col items-center min-h-[100vh]">
				<form
					className="flex flex-col w-[560px]"
					onSubmit={handleSubmit}
				>
					<img
						className="mt-16 mb-8 mx-auto"
						src={logo}
						width={"200px"}
						height={"200px"}
						alt=""
						draggable="false"
					/>
					<p className="text-center mb-6 text-4xl text-red-600">
						Register
					</p>
					<input
						className="w-full focus:outline-none bg-slate-100  mb-4 h-16 pl-2 rounded-lg"
						type="text"
						name="name"
						placeholder="Full name"
						id="name"
					/>
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
									size={"1.5em"}
									onClick={() => setShowPass(!showPass)}
								/>
							) : (
								<AiFillEye
									size={"1.5em"}
									onClick={() => setShowPass(!showPass)}
								/>
							)}
						</span>
					</p>
					<p className="relative flex items-center mb-4">
						<input
							className="w-full block focus:outline-none bg-slate-100 h-16 pl-2 rounded-lg"
							type={!showConfirmPass ? "password" : "text"}
							name="confirmPassword"
							id="conf-pass"
							placeholder="Confirm password"
						/>
						<span className="absolute right-5">
							{!showConfirmPass ? (
								<AiFillEyeInvisible
									size={"1.5em"}
									onClick={() =>
										setShowConfirmPass(!showConfirmPass)
									}
								/>
							) : (
								<AiFillEye
									size={"1.5em"}
									onClick={() =>
										setShowConfirmPass(!showConfirmPass)
									}
								/>
							)}
						</span>
					</p>
					{error && (
						<p style={{ color: "red", textAlign: "center" }}>
							{error}
						</p>
					)}
					<input
						className="cursor-pointer bg-red-600 rounded my-4 h-16 text-2xl text-white"
						type="submit"
						value="Register"
					/>
				</form>
				<Link className="text-red-600" to="/login">
					Already have an account?
				</Link>
				<div className="w-[560px]">
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	)
}

export default Register

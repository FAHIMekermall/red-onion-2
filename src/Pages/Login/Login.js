import React, { useState } from "react"
import logo from "../../assets/logo/logo2.png"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const Login = () => {
	const [showPass, setShowPass] = useState(false)
	return (
		<div className="grid justify-items-center h-[100vh]">
			<form className="flex flex-col w-[560px]">
				<img className="my-16 mx-auto" src={logo} width={"200px"} height={"200px"} alt="" />
				<input
					className="w-full focus:outline-none bg-slate-100  mb-4 h-16 pl-2 rounded-lg"
					type="text"
					name="email"
					placeholder="Email"
					id=""
				/>
				<p className="relative flex items-center mb-4">
					<input
						className="w-full block focus:outline-none bg-slate-100 h-16 pl-2 rounded-lg"
						type={!showPass ? "password" : "text"}
						placeholder="Password"
						name="password"
						id=""
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
				<input
					className="cursor-pointer bg-red-600 rounded my-4 h-16 text-2xl text-white"
					type="submit"
					value="Login"
				/>
			</form>
		</div>
	)
}

export default Login

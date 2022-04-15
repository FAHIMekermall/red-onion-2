import React from "react"
import "./Banner.css"

const Banner = () => {
	return (
		<div className="bg-bannerBackground flex items-center flex-col justify-center">
			<p className="text-6xl grid justify-items-center">
				Best food waiting for your belly
			</p>
			<span className="mt-6 w-[40%]  h-14 relative">
				<input
					className="w-full text-gray-700 h-full rounded-full focus:outline-none text-2xl pl-4"
					type="text"
					name=""
					id=""
				/>
				<button className="absolute h-full bg-red-600 hover:bg-red-400 hover:text-fuchsia-800  rounded-full w-44 text-2xl text-white  right-0">
					Search
				</button>
			</span>
		</div>
	)
}

export default Banner

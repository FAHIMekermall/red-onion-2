import { Button } from "@mui/material"
import React from "react"

const Food = ({ food: { name, image, description } }) => {
	return (
		<div className="hover:shadow-2xl mb-6 w-[420px] grid justify-items-center p-12 rounded-3xl">
			<img className="" src={image} alt="" />
			<p className="text-center font-mono font-extrabold text-3xl uppercase my-3">{name}</p>
			<p className="font-sans justify-center py-4">{description}</p>
			<Button className="mx-auto block my-2" variant="contained">Add to cart</Button>
		</div>
	)
}

export default Food

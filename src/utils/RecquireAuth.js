import { onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../firebase.init"

const RecquireAuth = ({ children }) => {
	const location = useLocation()
	const [user, setUser] = useState(null)
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user)
		} else {
			setUser(null)
		}
	})
	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />
	} else {
		return children
	}
}

export default RecquireAuth

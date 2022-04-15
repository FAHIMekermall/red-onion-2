import React from "react"
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {

    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleFacebook = () => {
        signInWithPopup(auth, facebookProvider)
    }
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }
    const handleGitHub = () => {
        signInWithPopup(auth, githubProvider)
    }

	return (
		<div className="grid my-24 w-full">
			<button onClick={() => handleGoogle()} className="w-full rounded-lg text-xl bg-green-600 text-white  h-16">
				Continue with google
			</button>
			<br />
			<button onClick={() => handleFacebook()} className="w-full rounded-lg text-xl bg-blue-600 text-white h-16">
				Continue with Facebook
			</button>
			<br />
			<button onClick={() => handleGitHub()} className="w-full rounded-lg text-xl bg-yellow-600 text-white h-16">
            Continue with Github
			</button>
		</div>
	)
}

export default SocialLogin

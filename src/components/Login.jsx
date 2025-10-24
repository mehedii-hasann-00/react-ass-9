import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const handleGoogleBtn = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>console.log(result))
        .catch(er=>console.log(er))
    }
    return (
        <div>Login
        <button> Sign in with google</button>

        </div>
    )
}

export default Login
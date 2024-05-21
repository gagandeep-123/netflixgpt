import React, { useRef, useState } from 'react'
import Header from './Header'
import { isValidate } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [Signedin, setSignedin] = useState(true); 
  const [errMessage, seterrMessage] = useState(null);
  const email = useRef(null)
  const password = useRef(null)
  
  const checkValidation = (e) => {
    e.preventDefault()
    const message = isValidate(email.current.value, password.current.value);
    seterrMessage(message)

    if (message) return; 

    if (Signedin) {
      //Sign in logic
signInWithEmailAndPassword(auth ,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage)
  });
      
    }
    else {
      //Sign up logic
      
createUserWithEmailAndPassword(auth , email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   
     
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage)
    // ..
    
  });
      
    }

    
    
  }
  const toggleSignIn = () => {
    setSignedin(!Signedin)
  }
  return (
    <div>
      <Header errMessage />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <form className='absolute p-12 bg-black mt-48 w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
        <h1 className='font-bold text-3xl py-4'>{Signedin ? "Sign In" : "Sign Up"}</h1>
        {!Signedin && <input className='p-2 my-4 w-full bg-transparent border caret-purple-200 rounded-lg' type="text" placeholder="Full name"></input>}

        <input ref={email} className='p-2 my-4 w-full bg-transparent border caret-purple-200 rounded-lg' type="text"
          placeholder="Email Address ">
          
          </input>
      <input ref= {password} className='p-2 my-4 w-full bg-transparent border caret-purple-200 rounded-lg' type="password" placeholder="Password"></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={checkValidation}>{Signedin ? "Sign In" : "Sign Up"}</button>
        <p className= 'font-bold text-red-900 py-2 text-lg'>{errMessage}</p>
        <p onClick={toggleSignIn}>{Signedin ? "New to Netflix? Sign up now.": "Already a user? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login

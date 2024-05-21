import React, { useState } from 'react'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth"
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeUser } from '../Utils/userSlice'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux';
const Header = () => {
  
  
  const Myuser = useSelector((store) => store.user
  )
  const navigate = useNavigate()
  const dispatch = useDispatch();
     useEffect(() => {
      const authChangeResult =  onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName } = user;
    dispatch(adduser({ uid: uid, email: email, displayName: displayName }))
    navigate("/browse")
     
    // ...
  } else {
    // User is signed out
      // ...
    dispatch(removeUser())
    navigate("/")
  }
      });
       return () => authChangeResult();

        
    },[])
  const Handlebuttonclick = () => {
    signOut(auth).then(() => {
      
  
}).catch((error) => {
  // An error happened.
});
  }
  return (
   
      <div className = ' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className=' w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
      { Myuser ? <div className='flex p-2'>
        <img className='w-12 h-12' src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"></img>

      <button className='text-white font-bold ' onClick={Handlebuttonclick}>Sign out</button> 
      </div> : null}
      </div>

  )
}

export default Header

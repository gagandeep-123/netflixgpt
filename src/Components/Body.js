import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeUser } from '../Utils/userSlice'
import { auth } from '../firebase'
import { useDispatch } from "react-redux"


const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
        path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element : <Browse />
        }
    ])

    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName } = user;
      dispatch(adduser({ uid: uid, email : email , displayName : displayName}))
     
    // ...
  } else {
    // User is signed out
      // ...
      dispatch(removeUser())
  }
});

        
    },[])
    
  return (
      <div>
          <RouterProvider router={appRouter} />
        
    </div>
  )
}

export default Body
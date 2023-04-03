import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useUserAuth } from '../context/authUserContext.js';


export const SignIn = () => {
  const { logOut, user } = useUserAuth()
 

  const navigate = useNavigate()
  const handleLogIn = () => {
    navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMyWords = () => {

  }

  return (
      user?
      <div className='flex p-3 space-x-2 justify-evenly md:justify-end'>
        {/* <button className='p-1 bg-[#f1f1f1] rounded-md w-28 hover:shadow-xl shadow-indigo-500/40' onClick={handleMyWords}>My words</button> */}
        <button className='p-1 bg-[#f1f1f1] rounded-md w-28 hover:shadow-xl shadow-indigo-500/40' onClick={handleLogout}>Log out</button>
      </div>
      : <div className='flex p-3 space-x-2 justify-evenly md:justify-end'>
          <button className='p-1 bg-[#f1f1f1] rounded-md w-28 hover:shadow-xl shadow-indigo-500/40' onClick={handleLogIn}>Log in</button>
          <button className='p-1 bg-[#f1f1f1] rounded-md w-28 hover:shadow-xl shadow-indigo-500/40' onClick={handleSignUp}>Sign up</button>
        </div>
  )
}

import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const SignIn = () => {

  const[user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  }) 

  const navigate = useNavigate()
  const handleLogIn = () => {
    navigate('/login')
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  const logOut = async () => {
    await signOut(auth)
  }

  return (
      user ?
      <div className='flex p-3 space-x-2 justify-evenly md:justify-end'>
        <button className='p-1 bg-[#f1f1f1] rounded-md w-28 shadow-md' onClick={logOut}>Log out</button> 
      </div>
      : <div className='flex p-3 space-x-2 justify-evenly md:justify-end'>
      <button className='p-1 bg-[#f1f1f1] rounded-md w-28 shadow-md' onClick={handleLogIn}>Log in</button>
      <button className='p-1 bg-[#f1f1f1] rounded-md w-28 shadow-md' onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

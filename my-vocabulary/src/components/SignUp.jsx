import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { signInGoogle } from "../firebase";

export const SignUp=({globalState})=>{
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const[user, setUser] = useState({})
  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    const userforDb = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentUser)
  };
    const userInDB = fetch('https://english-joaz.onrender.com/user', userforDb)
    .then((response)=>response.json())
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
  })


 if(user){
      navigate('/')
    }
// handle form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // creating a new user
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
      setError("The password is too weak.");
    } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
      setError("The email address is already in use.");
    } else {
      console.log(err.code);
      alert(err.code);
    }
    ;
    }
     
     
  };

   const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 min-h-screen p-5 flex flex-col items-center justify-center md:flex-row'>
      <div className='bg-[#f1f1f1] rounded-xl py-10 drop-shadow-xl w-[95%] md:w-[50%] text-center'>
      <form autoComplete="off" className="text-center" onSubmit={handleSubmit}>
        <div className="p-1 bg-[#ffffff] mx-auto rounded-md w-[50%] flex justify-center hover:shadow-xl shadow-indigo-500/40 ">
          <img className='m-2' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4='></img>
          <button className='' onClick={signInGoogle}> Sign up with Google</button>
        </div>
        <p className="font-extralight">or</p>
        <h1 className="font-bold">Sign Up</h1>
        <p>Fill the form below to create your account.</p>
        <div className="m-3">
          <input
            className="bg-white rounded-md w-[95%] pl-3 md:w-9/12"
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
            />
          {/* <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label> */}
        </div>
        <div className="m-3">
          <input
            className="bg-white rounded-md w-[95%] pl-3 md:w-9/12"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
            />
          {/* <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label> */}
        </div>
          {error ? <p className="login-error">{error}</p> : null}
        <div className="bg-[#F6256B] w-36 py-3 rounded-md text-center mx-auto text-[#0c0c0c] hover:shadow-xl shadow-indigo-500/40">
          <button title="Sign up" aria-label="Signup" type="submit">
            Create account
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Already have an account?
          <Link to="/login" className="text-[#F6256B]"> Sign in</Link>
        </p>
      </div>
      </div>
    </div>
  );
}


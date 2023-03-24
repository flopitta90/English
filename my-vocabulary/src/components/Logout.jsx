import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  AuthErrorCodes, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const Logout=()=> {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // initialised auth instance
  
  const navigate = useNavigate()
  const[user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  }) 

  if(user){
    navigate('/')
  }

// handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    try {
      const user =  await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        setError("The email address or password is incorrect");
      } else {
        console.log(err.code);
        alert(err.code);
      }
    }
  
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 min-h-screen p-5 flex flex-col items-center justify-center md:flex-row '>
      <div className='bg-[#f1f1f1] rounded-xl py-10 drop-shadow-xl w-[95%] md:w-[50%] text-center'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1 className='font-bold'>Sign In</h1>
        <p>Fill the form below to sign in to your account.</p>
        <div className="m-3">
          <input
            className="bg-white rounded-md w-[95%] pl-3 md:w-9/12 "
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
        <div className="bg-[#F6256B] w-36 py-3 rounded-md text-center mx-auto text-[#0c0c0c] font-semibold">
          <button title="Login" aria-label="Login" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Don't have an account?
          <Link to="/signup" className="text-[#F6256B]"> Sign Up</Link>
        </p>
      </div>
      </div>
    </div>
  );
}


import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from '../firebase.js';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userInDB, setUserInDB] = useState({})
  const [words, setWords] = useState([])
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
    })

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(()=>{
    if(user){
      const userforDb = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      };
      const userInDB = fetch('https://english-joaz.onrender.com/user', userforDb)
      .then((response)=>response.json())
      .then((data)=> setUserInDB(data[0]))
      .catch((err)=> console.log(err))
    } else setUserInDB({})
  },[user])

  useEffect(()=>{
    if(userInDB?.words){
      setWords(userInDB.words)
    }else {
      setWords([])
    }
    
  }, [userInDB])


  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, userInDB, words}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

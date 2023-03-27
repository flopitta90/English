// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZhlFG4SORVhOyVJ9ZPIuf5kblIoiSg0s",
  authDomain: "wordup-c7b5e.firebaseapp.com",
  projectId: "wordup-c7b5e",
  storageBucket: "wordup-c7b5e.appspot.com",
  messagingSenderId: "1030145274971",
  appId: "1:1030145274971:web:2e332eed4162a5df35fb7e",
  measurementId: "G-94R2X2C0CR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);

const gmailProvider = new GoogleAuthProvider()

export const signInGoogle = async() => {
  try {
    const user = await signInWithPopup(auth, gmailProvider)   
  } catch (error) {
    alert(error.message)
  }
}
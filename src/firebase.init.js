// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQzOoR5nZVy-y6QwMb5hpij7e74xCb7BQ",
  authDomain: "manage-a-simple-development.firebaseapp.com",
  projectId: "manage-a-simple-development",
  storageBucket: "manage-a-simple-development.appspot.com",
  messagingSenderId: "1065395787500",
  appId: "1:1065395787500:web:f6010573107be6b8ea37c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
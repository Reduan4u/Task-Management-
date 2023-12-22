// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnvfN4Wkin73rNJcZrWkHNDtiELwop8SM",
  authDomain: "task-management-64e61.firebaseapp.com",
  projectId: "task-management-64e61",
  storageBucket: "task-management-64e61.appspot.com",
  messagingSenderId: "859513890999",
  appId: "1:859513890999:web:3a10742be8bb7f5f820532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

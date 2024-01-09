// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-job-money-phonenumber.firebaseapp.com",
  projectId: "auth-job-money-phonenumber",
  storageBucket: "auth-job-money-phonenumber.appspot.com",
  messagingSenderId: "608756708190",
  appId: "1:608756708190:web:560e7f7cb3d0b99c1115cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth();

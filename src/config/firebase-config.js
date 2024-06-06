// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRWCwls-pasDdhwr9_eNUyOi2mHf8r2bY",
  authDomain: "expense-tracker-8fe74.firebaseapp.com",
  projectId: "expense-tracker-8fe74",
  storageBucket: "expense-tracker-8fe74.appspot.com",
  messagingSenderId: "645448696248",
  appId: "1:645448696248:web:a1d81122c706cf5bdf0f4d",
  measurementId: "G-02DM60R6FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
//firebase login
//firebase init
//firebase deploy
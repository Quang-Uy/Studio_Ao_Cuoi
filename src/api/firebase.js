// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnsGKdDRslMPams5_TvvSqj89wf5rVWxo",
  authDomain: "asm-dnt1.firebaseapp.com",
  projectId: "asm-dnt1",
  storageBucket: "asm-dnt1.appspot.com",
  messagingSenderId: "279537472598",
  appId: "1:279537472598:web:7a6e8572a35303d9d157f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
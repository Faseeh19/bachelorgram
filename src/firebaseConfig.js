// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOxgVtfg8g7E0DG2bP8g3p2lXGK9QF2tM",
  authDomain: "bachelorsgram.firebaseapp.com",
  projectId: "bachelorsgram",
  storageBucket: "bachelorsgram.appspot.com",
  messagingSenderId: "727858326313",
  appId: "1:727858326313:web:8d2608ca3b823a8e6d2538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZIGz5G5dfGhU1auzugkI8FMAAzhlkbYQ",
  authDomain: "sortware-9a86f.firebaseapp.com",
  projectId: "sortware-9a86f",
  storageBucket: "sortware-9a86f.appspot.com",
  messagingSenderId: "115755784037",
  appId: "1:115755784037:web:4738e8722b9fc6ef6bb38c"
};

const app = initializeApp(firebaseConfig);
export const Auth= getAuth()
export const db= getFirestore(app)
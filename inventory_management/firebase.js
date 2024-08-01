// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe20nsRwOXKD-b0q6j5AopQUtfIBZRfOo",
  authDomain: "inventory-management-1bd1c.firebaseapp.com",
  projectId: "inventory-management-1bd1c",
  storageBucket: "inventory-management-1bd1c.appspot.com",
  messagingSenderId: "741909402634",
  appId: "1:741909402634:web:d1f56657ac9ba0b7f4fbf3",
  measurementId: "G-DSGGBMSJYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)


export {firestore}
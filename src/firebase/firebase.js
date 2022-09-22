// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz7KVdNhvtDRUmkTE5fgt_MOt-lVopymI",
  authDomain: "reactjs-189ef.firebaseapp.com",
  projectId: "reactjs-189ef",
  storageBucket: "reactjs-189ef.appspot.com",
  messagingSenderId: "326677547482",
  appId: "1:326677547482:web:37ca44188900cc1b22d8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
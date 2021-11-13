import firebase from "./firebase";
// import * as firebase from "firebase/app"
import "firebase/storage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkE6aJC-D9LVfynFIqWBunjp_ThwHA4o",
  authDomain: "szone-393ac.firebaseapp.com",
  projectId: "szone-393ac",
  storageBucket: "szone-393ac.appspot.com",
  messagingSenderId: "710170872278",
  appId: "1:710170872278:web:7d75aca8dabc5d4a7d7c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







// const firebaseConfig = {
//     apiKey: "AIzaSyBNkE6aJC-D9LVfynFIqWBunjp_ThwHA4o",
//     authDomain: "szone-393ac.firebaseapp.com",
//     projectId: "szone-393ac",
//     storageBucket: "szone-393ac.appspot.com",
//     messagingSenderId: "710170872278",
//     appId: "1:710170872278:web:7d75aca8dabc5d4a7d7c77"
//   };

const app = !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig) 
 : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };


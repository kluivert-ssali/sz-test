import firebase from './firebase';
import "firebase/storage";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBNkE6aJC-D9LVfynFIqWBunjp_ThwHA4o",
    authDomain: "szone-393ac.firebaseapp.com",
    projectId: "szone-393ac",
    storageBucket: "szone-393ac.appspot.com",
    messagingSenderId: "710170872278",
    appId: "1:710170872278:web:7d75aca8dabc5d4a7d7c77"
};


// const app = !firebase.apps.length
//  ? firebase.initializeApp(firebaseConfig) 
//  : firebase.app();

const firebseApp = firebase.initializeApp(firebaseConfig)

// const db= firebseApp.firestore()

// // const db = app.firestore();
// const storage = firebase.storage();

// export { db, storage };





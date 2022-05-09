import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3DwYe7HkrvJBjeb93WnuYVD1LOjKmeiM",
    authDomain: "nwitter-84733.firebaseapp.com",
    projectId: "nwitter-84733",
    storageBucket: "nwitter-84733.appspot.com",
    messagingSenderId: "975245828487",
    appId: "1:975245828487:web:53356043eab113e4aab322"
};

export default firebase.initializeApp(firebaseConfig);
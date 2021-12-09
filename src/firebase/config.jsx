// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq2XAz2CVFZpYt97XtJpWvY4jRgkpD-6I",
    authDomain: "themusicstoreseiner.firebaseapp.com",
    projectId: "themusicstoreseiner",
    storageBucket: "themusicstoreseiner.appspot.com",
    messagingSenderId: "649423074543",
    appId: "1:649423074543:web:fb24331876edc7f51d571a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
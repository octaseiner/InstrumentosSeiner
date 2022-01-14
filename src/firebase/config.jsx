// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhzYB3qb2NKtGZKfyDgVpGaDgATTAnSvg",
    authDomain: "thecymbalstorecoder.firebaseapp.com",
    projectId: "thecymbalstorecoder",
    storageBucket: "thecymbalstorecoder.appspot.com",
    messagingSenderId: "933222496088",
    appId: "1:933222496088:web:3aff65c2352038830a972d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


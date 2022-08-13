// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0kxT0syBkokvlt85OjITWaZdN3yvK9Lo",
    authDomain: "movie-web-22a18.firebaseapp.com",
    projectId: "movie-web-22a18",
    storageBucket: "movie-web-22a18.appspot.com",
    messagingSenderId: "447381933826",
    appId: "1:447381933826:web:7295e765ffce40e9c2bc1b"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApps();
const db = getFirestore()
const auth = getAuth()

export default  app
export {auth, db}
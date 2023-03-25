// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4LPDDykZoWt4EDQSb2LN_QcCmKADIJJU",
  authDomain: "challengeclinica.firebaseapp.com",
  projectId: "challengeclinica",
  storageBucket: "challengeclinica.appspot.com",
  messagingSenderId: "342586637295",
  appId: "1:342586637295:web:6223bf06c30870c281941a"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth= firebase.auth()
export{ auth }
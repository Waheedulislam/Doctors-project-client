// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiN0TYnxjR2Jp8YHcJK-3GoaBhD35LUo8",
  authDomain: "doctorate-2.firebaseapp.com",
  projectId: "doctorate-2",
  storageBucket: "doctorate-2.appspot.com",
  messagingSenderId: "302906707684",
  appId: "1:302906707684:web:27f52d11f3247470c026f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

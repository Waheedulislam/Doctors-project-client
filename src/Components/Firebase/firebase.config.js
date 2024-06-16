// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3g5zW4mSxjc3_NIStCFfXeUqLvMtvdMI",
  authDomain: "doctorate-12b77.firebaseapp.com",
  projectId: "doctorate-12b77",
  storageBucket: "doctorate-12b77.appspot.com",
  messagingSenderId: "514433927039",
  appId: "1:514433927039:web:c4e5aa2f7c21db77823c4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

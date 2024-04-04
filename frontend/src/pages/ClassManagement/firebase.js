
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzaTdPurdUQYX_qNH1bLA-APdt5cDDogc",
  authDomain: "itp-fileupload.firebaseapp.com",
  projectId: "itp-fileupload",
  storageBucket: "itp-fileupload.appspot.com",
  messagingSenderId: "868078522709",
  appId: "1:868078522709:web:fcfcfd01818d9077d09fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
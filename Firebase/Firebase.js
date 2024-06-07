// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmCfBHuesTT62lAvknqgmVBNSjMAPy0E",
  authDomain: "portfolio-f82d8.firebaseapp.com",
  projectId: "portfolio-f82d8",
  storageBucket: "portfolio-f82d8.appspot.com",
  messagingSenderId: "243403684328",
  appId: "1:243403684328:web:5d01078d080c04a2c58c5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;

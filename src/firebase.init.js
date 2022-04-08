// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuhzKsyeTtalSjDuNGpA4Iz44sk8mPeYg",
  authDomain: "router-firebase-intregration.firebaseapp.com",
  projectId: "router-firebase-intregration",
  storageBucket: "router-firebase-intregration.appspot.com",
  messagingSenderId: "783386292512",
  appId: "1:783386292512:web:9e4ed56a1b1b82fea66745",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

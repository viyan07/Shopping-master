// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4IN2vMih4vsR7EVq3IDz3HeLqtxwn9eo",
  authDomain: "shopping-master-60564.firebaseapp.com",
  projectId: "shopping-master-60564",
  storageBucket: "shopping-master-60564.appspot.com",
  messagingSenderId: "805016661249",
  appId: "1:805016661249:web:7052625745f134135f7f00",
  measurementId: "G-0Q4WG60TXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
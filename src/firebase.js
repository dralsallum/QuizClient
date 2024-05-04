// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLWGyGtKBWSdlz7B9lTN7qj4qZm-b7KHo",
  authDomain: "english-a6545.firebaseapp.com",
  projectId: "english-a6545",
  storageBucket: "english-a6545.appspot.com",
  messagingSenderId: "1072557097038",
  appId: "1:1072557097038:web:54bde08540564e7dc1c31f",
  measurementId: "G-PWZ8PXFSW8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

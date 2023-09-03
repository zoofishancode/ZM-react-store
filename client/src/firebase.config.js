// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiy46vo4MXuLsxe1IpZb3oa7wEQ-sHRf8",
  authDomain: "ecommerce-6f735.firebaseapp.com",
  databaseURL:
    "https://ecommerce-6f735-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-6f735",
  storageBucket: "ecommerce-6f735.appspot.com",
  messagingSenderId: "1016446680865",
  appId: "1:1016446680865:web:efda3a0ec862d336664860",
  measurementId: "G-E29TEVK5GC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

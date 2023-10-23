// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3kRHY5JHLx8632TzigPY3Vf_nd_lNtF0",
  authDomain: "project-e1541.firebaseapp.com",
  projectId: "project-e1541",
  storageBucket: "project-e1541.appspot.com",
  messagingSenderId: "1066256548681",
  appId: "1:1066256548681:web:000521ea3ce48fae859098",
  measurementId: "G-N6KD83X7J3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
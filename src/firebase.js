// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeMPYNInTChn22xXZQcgxnDTgqTXdQj7M",
  authDomain: "vb-react-ecommerce-app.firebaseapp.com",
  projectId: "vb-react-ecommerce-app",
  storageBucket: "vb-react-ecommerce-app.appspot.com",
  messagingSenderId: "1044182477169",
  appId: "1:1044182477169:web:92c9acded84f6457ac6ed0",
  measurementId: "G-F5HSKBKM6G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
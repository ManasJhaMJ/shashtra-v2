// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAYa0gQLZRiRenu8ziEVqL7YQpYZoq780", // Ensure this is correct
  authDomain: "shastraapp-2a999.firebaseapp.com",
  projectId: "shastraapp-2a999",
  storageBucket: "shastraapp-2a999.appspot.com",
  messagingSenderId: "762211520426",
  appId: "1:762211520426:web:your-app-id",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export auth and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
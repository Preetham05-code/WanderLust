import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbhEcYXmJ24Vv0ftYQoBqnY6wOUWE0sCY",
  authDomain: "wanderlust-75ea4.firebaseapp.com",
  projectId: "wanderlust-75ea4",
  storageBucket: "wanderlust-75ea4.firebasestorage.app",
  messagingSenderId: "678040010591",
  appId: "1:678040010591:web:29246f410fc443cae2c0ea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup };
//src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Tu configuración de Firebase (reemplazada con tus valores reales)
const firebaseConfig = {
  apiKey: "AIzaSyAoks4yrGfHyQD2OdDAFMtmL3-CQ5os-bM",
  authDomain: "backend-marketlist.firebaseapp.com",
  projectId: "backend-marketlist",
  storageBucket: "backend-marketlist.firebasestorage.app",
  messagingSenderId: "685572739918",
  appId: "1:685572739918:web:e7ccd3425a3f1ebe24841f",
  measurementId: "G-X2KFZX1DR9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);

// Proveedores de autenticación
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;

// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  signInWithPopup,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth, googleProvider, facebookProvider, githubProvider } from "../services/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registro con email y contraseña
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Inicio de sesión con email y contraseña
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Inicio de sesión con Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Inicio de sesión con Facebook
  const loginWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // Inicio de sesión con GitHub
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Cerrar sesión
  const logout = () => {
    return signOut(auth);
  };

  // Restablecer contraseña
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    logout,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// Exporta AuthContext para que pueda ser importado en otros archivos
export { AuthContext };

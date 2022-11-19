import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPrvider = ({ children }) => {
  const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const createUser = (email, password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
 };
  const saveName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    saveName,
    googleLogin,
    userLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPrvider;

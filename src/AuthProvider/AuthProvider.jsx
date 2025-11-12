import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  // updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../main";
// import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const updateUserProfile = (name, photoURL) => {
  //   setLoading(true);
  //   if (!auth.currentUser) {
  //     toast.error("No user logged in");
  //     return;
  //   }
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   }).then(() => {
  //     setUser({
  //       ...auth.currentUser,
  //       displayName: name,
  //       photoURL,
  //     });
  //     setLoading(false);
  //   });
  // };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    googleLogin,
    createUser,
    loginUser,
    // updateUserProfile,
    resetPassword,
    logOutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

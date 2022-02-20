import React, { useState, useEffect, useContext, createContext } from "react";
import {
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  if (user) {
    console.log(user.email);
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, new GithubAuthProvider());
      setUser(result.user);
    } catch (err) {
      console.log(err);
    }
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    await signOut(auth);
    setUser(false);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   const confirmPasswordReset = (password, code) => {
  //       const resetCode = code || getFromQueryString('oobCode');

  //       return firebase
  //           .auth()
  //           .confirmPasswordReset(resetCode, password)
  //           .then(() => {
  //               return true;
  //           });
  //   };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signout,
    signinWithGithub,
  };
}

import React, { useState, useEffect, useContext, createContext } from "react";
import app from "./firebase";
import {
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
} from "firebase/auth";
import { createUser } from "./db";

const auth = getAuth(app);

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  if (user) {
    console.log(user);
  }

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, new GithubAuthProvider());
      handleUser(result.user);
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

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return {
    user,
    signout,
    signinWithGithub,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    photoUrl: user.photoURL,
    provider: user.providerData[0].providerId,
  };
};

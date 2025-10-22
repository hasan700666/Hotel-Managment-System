import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sinInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user is here", currentUser);
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const singOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out successful");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const authInfo = {
    user,
    createUser,
    sinInUser,
    singOut,
    loding,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

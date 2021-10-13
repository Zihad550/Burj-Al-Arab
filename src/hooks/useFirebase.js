import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const brandSignIn = (provider) => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);
  return {
    user,
    brandSignIn,
    logOut,
    updateEmail,
    updatePassword,
    register,
    signIn,
  };
};

export default useFirebase;

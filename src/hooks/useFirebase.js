import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // observe user auth state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };


    return {
        user,
        logOut,
        signInWithGoogle
    }
}

export default useFirebase;
import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider;

    const createuser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            serUser(currentUser);
            console.log('current user', currentUser);

            // get and set token
            if(currentUser){ axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            .then(data => {
                // console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token);
                setLoading(false);
            }) 
            }
            else{
                localStorage.removeItem('access-token');
            }

            
        });
        return () => {
            return unsuscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
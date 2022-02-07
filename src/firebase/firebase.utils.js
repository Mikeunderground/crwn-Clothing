import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDhUimV11Dg_v0iY5OYofmTukeLYDM2Dwg",
    authDomain: "crwn-db-e0987.firebaseapp.com",
    projectId: "crwn-db-e0987",
    storageBucket: "crwn-db-e0987.appspot.com",
    messagingSenderId: "224708268930",
    appId: "1:224708268930:web:5443f4dcc62a8b944f359b",
    measurementId: "G-4EM2Z20Y1T"
};

initializeApp((config));

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
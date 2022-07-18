import { initializeApp } from 'firebase/app';
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ1RhFSHkYxSndciYQEhMsZ8gfQEZLkc0",
    authDomain: "react-ecom-app-db.firebaseapp.com",
    projectId: "react-ecom-app-db",
    storageBucket: "react-ecom-app-db.appspot.com",
    messagingSenderId: "178809766298",
    appId: "1:178809766298:web:ba1c451a68c18adf207a23"
  };
  
  //Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
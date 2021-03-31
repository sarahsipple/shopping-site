import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAt6kun_6pQPLQyURrUsxEkaLJicSOPWVQ",
    authDomain: "shopping-site-510d4.firebaseapp.com",
    projectId: "shopping-site-510d4",
    storageBucket: "shopping-site-510d4.appspot.com",
    messagingSenderId: "1018514261345",
    appId: "1:1018514261345:web:52282df6ef4e71cba2f120",
    measurementId: "G-FC60FFQ8SV"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

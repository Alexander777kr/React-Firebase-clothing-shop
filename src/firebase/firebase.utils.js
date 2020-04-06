import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4Sq4BPbqFBODwoEXPXzhA4xVOtA6B96s",
  authDomain: "react-crown-db-a06a7.firebaseapp.com",
  databaseURL: "https://react-crown-db-a06a7.firebaseio.com",
  projectId: "react-crown-db-a06a7",
  storageBucket: "react-crown-db-a06a7.appspot.com",
  messagingSenderId: "357730411504",
  appId: "1:357730411504:web:18b45dec3dc96f9a38f335",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

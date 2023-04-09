import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAvRshNhs9H-bUi2GoeGOoMibNXE1NkLuI",
    authDomain: "proc71-24beb.firebaseapp.com",
    projectId: "proc71-24beb",
    storageBucket: "proc71-24beb.appspot.com",
    messagingSenderId: "154205660546",
    appId: "1:154205660546:web:6f7ef3d5d637bf39699b9b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

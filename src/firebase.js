import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWQZPKu_XoUEMJGhrYHabNyQYVEylrqAg",
    authDomain: "discord-clone-d6be3.firebaseapp.com",
    projectId: "discord-clone-d6be3",
    storageBucket: "discord-clone-d6be3.appspot.com",
    messagingSenderId: "899816240213",
    appId: "1:899816240213:web:ce26a2f37b1895567650dc",
    measurementId: "G-XMQR02J41F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
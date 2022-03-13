import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdFYgyhlAotaC7JHlvtZBknJNEQ-uu3gQ",
    authDomain: "twitter-clone-b1002.firebaseapp.com",
    projectId: "twitter-clone-b1002",
    storageBucket: "twitter-clone-b1002.appspot.com",
    messagingSenderId: "940383066718",
    appId: "1:940383066718:web:577f84c03355c0543bb2cf",
    measurementId: "G-7DTJ62G46G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
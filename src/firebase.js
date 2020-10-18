import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeovqGW_iAGrPEuvChaZ3rQR9JzIf2dcA",
    authDomain: "chat-c39bf.firebaseapp.com",
    databaseURL: "https://chat-c39bf.firebaseio.com",
    projectId: "chat-c39bf",
    storageBucket: "chat-c39bf.appspot.com",
    messagingSenderId: "892197822753",
    appId: "1:892197822753:web:ec4a62c52fd9a5877c1e60",
    measurementId: "G-FB1K6YHRCQ"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
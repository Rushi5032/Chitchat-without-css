import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOtTKfc4Bxi-ct0fxMH55kyQSJT-txXvk",
  authDomain: "chitchat-4b4dd.firebaseapp.com",
  databaseURL: "https://chitchat-4b4dd.firebaseio.com",
  projectId: "chitchat-4b4dd",
  storageBucket: "chitchat-4b4dd.appspot.com",
  messagingSenderId: "763242570125",
  appId: "1:763242570125:web:e679fe2dba38368e1b9dc4",
  measurementId: "G-0ZG7M8R360"
});

const db=firebaseApp.firestore();

export default db;
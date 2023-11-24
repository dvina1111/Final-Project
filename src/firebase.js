import firebase from "./firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBBosdDzWyG35OsPQMsj6TOxv7a8EbTouk",
    authDomain: "finalproject-flixxit.firebaseapp.com",
    projectId: "finalproject-flixxit",
    storageBucket: "finalproject-flixxit.appspot.com",
    messagingSenderId: "28748657500",
    appId: "1:28748657500:web:da524372a94cafcb264799"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
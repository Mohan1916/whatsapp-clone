import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKG-XdyCNmqLdX5p2a7bEnby1w-pg1JOs",
    authDomain: "whatsapp-clone-f8dab.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f8dab.firebaseio.com",
    projectId: "whatsapp-clone-f8dab",
    storageBucket: "whatsapp-clone-f8dab.appspot.com",
    messagingSenderId: "272339935554",
    appId: "1:272339935554:web:21b5c315a052aab1a168db",
    measurementId: "G-VRNBYCHNPL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

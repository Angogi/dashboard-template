import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBBxqHgXwjwbJ0P5f8l22D2en01UC4bwE",
  authDomain: "socialmh-95e25.firebaseapp.com",
  databaseURL: "https://socialmh-95e25.firebaseio.com",
  projectId: "socialmh-95e25",
  storageBucket: "socialmh-95e25.appspot.com",
  messagingSenderId: "932587831698",
  appId: "1:932587831698:web:64fb973a6069b0b2ecc14b",
  measurementId: "G-C691XLG6ZC"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
import Rebase from "re-base";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4w1ndk24BFv3LLTpHslKHFqr_fxumSNU",
  authDomain: "catch-of-the-day-sanjit-kurar.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-sanjit-kurar.firebaseio.com",
  projectId: "catch-of-the-day-sanjit-kurar",
  storageBucket: "catch-of-the-day-sanjit-kurar.appspot.com",
  messagingSenderId: "817027776152",
  appId: "1:817027776152:web:3276adb118c36ce2e7daed",
  measurementId: "G-RJ2BWEM0D7"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const base=Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
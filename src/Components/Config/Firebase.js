
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBARjW5Oe_bpuAwS-i9mkxCP6eG8IjlPTc",
  authDomain: "twitter-clone-378e1.firebaseapp.com",
  databaseURL: "https://twitter-clone-378e1.firebaseio.com",
  projectId: "twitter-clone-378e1",
  storageBucket: "twitter-clone-378e1.appspot.com",
  messagingSenderId: "530012349060",
  appId: "1:530012349060:web:125f639e5c0e1f1f6e98d1",
  measurementId: "G-XHNVY6PYEB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
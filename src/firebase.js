import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCIxt_t7LD1io2EEC8wP5J9Lf8_7d9c08I",
  authDomain: "crud-f8c63.firebaseapp.com",
  databaseURL: "https://crud-f8c63-default-rtdb.firebaseio.com",
  projectId: "crud-f8c63",
  storageBucket: "crud-f8c63.appspot.com",
  messagingSenderId: "950747905424",
  appId: "1:950747905424:web:973b1e91be363c464f4715"
};

firebase.initializeApp(config);

export default firebase.database();

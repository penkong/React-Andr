// <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
import firebase from 'firebase/app';
// for db
import 'firebase/firestore';
// for auth
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCzwlJDxAmR351hbk66aqFuCWcaS9l-viM",
  authDomain: "ecommerce-1e14e.firebaseapp.com",
  databaseURL: "https://ecommerce-1e14e.firebaseio.com",
  projectId: "ecommerce-1e14e",
  storageBucket: "",
  messagingSenderId: "131366919277",
  appId: "1:131366919277:web:9a8d447268d52c4d"
};



firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();



// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// we want always google trigger pop up
provider.setCustomParameters({ prompt: 'select_account' });




export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
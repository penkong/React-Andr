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

export const createUserProfileDocument = async (userAuth, moreData) => {
  if(!userAuth) return;
  // fire store give use query reference or query snapshot
  // querying give us query reference(represent current place in db) obj
  // we use DocReference for CRUD
  // collection Reference
  // console.log(firestore.doc('users/fdfsdfs'));
  // this is doc ref
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // in obj back from snapshot exist say is there anything
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...moreData
      })
    } catch (error) {
      console.log('error on createing', error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();







// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// we want always google trigger pop up
provider.setCustomParameters({ prompt: 'select_account' });




export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
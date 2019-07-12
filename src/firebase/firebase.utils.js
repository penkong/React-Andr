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


//......................... DB - fire store ..............

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, moreData) => {
  if(!userAuth) return;
  // fire store give use query reference or query snapshot
  // querying give us query reference(represent current place in db) obj
  // we use DocReference for CRUD
  // collection Reference
  // console.log(firestore.doc('users/fdfsdfs'));
  // this is doc ref
  // its the doc snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // its the query(collection) snapshot
  // const collectionRef = firestore.collection('users');
  // in obj back from snapshot exist say is there anything
  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get()
  // console.log(snapShot);
  // console.log(collectionSnapshot)
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
// Query ref == show current place in db
// collection snapshot obj call query snapshot  firestore.collections()
// document snapshot obj call query reference   firestore.doc()
//  and ==> its have no data just show place to us

// Collection ref == document ref to perform CRUD 
// doc reference collection reference
// query snapshot get().set().update().delete() <== collectionRef.sth()
// document snapshot .exist() .data(return json)<== documentRef.sth()

// new util to create new collection on fire store to save new
// collection like data shop
export const addCollectionAndDocs = async (collectionKey, objectToAdd) => {
  // make collection on fire store
  const collectionRef = firestore.collection(collectionKey);
  // make batch right to group all req to make sure of success
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    // hey firestore give me new doc and randomly generate uid for it
    const newDocRef = collectionRef.doc();
    // with new id guys set obj(mens, hats, ...) for each
    batch.set(newDocRef, obj)
  })
  return await batch.commit();
}
// ---------------------- auth ----------------------


export const auth = firebase.auth();
// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// we want always google trigger pop up
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
// library imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase configs
const config = {
    apiKey: "AIzaSyAebXvm8yZkgbO4oXn8tZaurF_tlXhFfyI",
    authDomain: "crwn-db-193aa.firebaseapp.com",
    projectId: "crwn-db-193aa",
    storageBucket: "crwn-db-193aa.appspot.com",
    messagingSenderId: "100339275004",
    appId: "1:100339275004:web:a753f2674cee611c2f3379",
    measurementId: "G-XCZ5D9D5QL"
  };

  // This function stores the user data in the database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if userAuth is not false, in other words, if an account in logged in
    if (!userAuth) return;

    // setting a database document to userRef and creaing a snapshot of it
    // document refs are used for Creating, Reading, Updating and Deleting
    // snap shots are used for seeing information about the data
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // snapshot.exists tells us whether the doument already exists in the database
    if(!snapShot.exists) {
      // if it doesn't already exist then here is where we create it
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      // here is where we upload it to the database
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    // the function also returns userRef in case we need it in the future
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // This pops up the google account selector whenever we want to provide google authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({prompt: 'select_account'}); 
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

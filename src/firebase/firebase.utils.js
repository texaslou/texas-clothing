import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGdAw15oT59hLERNnaHD1G8odWeNyj12w",
    authDomain: "clothing-db-a1ad2.firebaseapp.com",
    projectId: "clothing-db-a1ad2",
    storageBucket: "clothing-db-a1ad2.appspot.com",
    messagingSenderId: "12507298560",
    appId: "1:12507298560:web:b6f031f035687c4f7091e5"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
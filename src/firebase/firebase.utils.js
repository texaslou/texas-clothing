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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // const userRef = firestore.doc('users/128dashadu')  
  // console.log(firestore.doc(`users/${userAuth.uid}`))
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exist){
    const {displayName, email} = userAuth;
    const creatAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }

  }

  return userRef;
}

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
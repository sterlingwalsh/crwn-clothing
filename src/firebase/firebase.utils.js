import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyChH7EZSERBlFX_WTOvip9Xi0uGqKmMo9o',
  authDomain: 'crwn-db-332e1.firebaseapp.com',
  databaseURL: 'https://crwn-db-332e1.firebaseio.com',
  projectId: 'crwn-db-332e1',
  storageBucket: '',
  messagingSenderId: '913137818734',
  appId: '1:913137818734:web:4d61614ff796d7a2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

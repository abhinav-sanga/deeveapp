import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCIwG3sp5OUycnFFNYtH6-z9pzNYqAhiCM",
  authDomain: "deevesoft-79e57.firebaseapp.com",
  databaseURL: "https://deevesoft-79e57.firebaseio.com",
  projectId: "deevesoft-79e57",
  storageBucket: "deevesoft-79e57.appspot.com",
  messagingSenderId: "525702295182"
};
firebase.initializeApp(config);

if(!firebase.apps.length){
  firebase.initializeApp(config);
}


/* const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
*/

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
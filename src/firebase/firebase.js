import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCGEIamtP1KlQtW49qGrvWSrrdc7jPKCFs",
  authDomain: "okesapp-303d7.firebaseapp.com",
  databaseURL: "https://okesapp-303d7.firebaseio.com",
  projectId: "okesapp-303d7",
  storageBucket: "",
  messagingSenderId: "497502410690"
};

const devConfig = {
  apiKey: "AIzaSyCGEIamtP1KlQtW49qGrvWSrrdc7jPKCFs",
  authDomain: "okesapp-303d7.firebaseapp.com",
  databaseURL: "https://okesapp-303d7.firebaseio.com",
  projectId: "okesapp-303d7",
  storageBucket: "",
  messagingSenderId: "497502410690"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

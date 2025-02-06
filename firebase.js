
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBlH4HKi52VghOFGSqwLGqMR4K7TvruCgk',
  authDomain: 'milkdelights-13e70.firebaseapp.com',
  projectId: 'milkdelights-13e70',
  storageBucket: 'milkdelights-13e70.appspot.com',
  messagingSenderId: '439081332892',
  appId: '1:439081332892:web:3f82babf59ad9bece7fd59',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {app, auth, db};
export const provider = new GoogleAuthProvider();
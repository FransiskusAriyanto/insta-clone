import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSkZzNigHXy3ZQKUeNNUg6Qd6Okz0Tiwg",
  authDomain: "insta-clone-63e78.firebaseapp.com",
  projectId: "insta-clone-63e78",
  storageBucket: "insta-clone-63e78.appspot.com",
  messagingSenderId: "1014498674734",
  appId: "1:1014498674734:web:15ee92851bb90b763ff7bf",
  measurementId: "G-DT2BGXVMS4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

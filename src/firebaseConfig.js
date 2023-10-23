import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4R6YXsCIgy3-Jnor7oXh1hGSgXvW0ffU",
  authDomain: "disney-plus-clone-b24fc.firebaseapp.com",
  projectId: "disney-plus-clone-b24fc",
  storageBucket: "disney-plus-clone-b24fc.appspot.com",
  messagingSenderId: "563497673075",
  appId: "1:563497673075:web:76865da66749c60ce8e506",
  measurementId: "G-E3WE9X8CR7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

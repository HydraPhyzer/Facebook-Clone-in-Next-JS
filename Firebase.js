import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG0oVkJ-EQTeUOP2usp0dJyEtXyyWUrOU",
  authDomain: "facebook-clone-b6d26.firebaseapp.com",
  projectId: "facebook-clone-b6d26",
  storageBucket: "facebook-clone-b6d26.appspot.com",
  messagingSenderId: "752749732841",
  appId: "1:752749732841:web:878761aa422daf13d1e178",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage=getStorage(app)
export {db,storage};
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBX6rB-blrDL7Wm7uoBaqhi9PadQhS3vtk",
  authDomain: "lmsauth-c4db4.firebaseapp.com",
  projectId: "lmsauth-c4db4",
  storageBucket: "lmsauth-c4db4.firebasestorage.app",
  messagingSenderId: "154392621292",
  appId: "1:154392621292:web:83cca5bcc37ff1359535c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export  {db,auth};
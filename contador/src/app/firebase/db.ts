import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC13sG5VBIwQ9VDQeXMLHiSaSYBiklftoo",
    authDomain: "contador-tp4.firebaseapp.com",
    projectId: "contador-tp4",
    storageBucket: "contador-tp4.appspot.com",
    messagingSenderId: "36631569376",
    appId: "1:36631569376:web:302c5472040936f1680185"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




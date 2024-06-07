// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ4WcIDpmyLq1ejcsg-_tsH6_xh-P7egc",
  authDomain: "contador-cfe6a.firebaseapp.com",
  projectId: "contador-cfe6a",
  storageBucket: "contador-cfe6a.appspot.com",
  messagingSenderId: "902105447698",
  appId: "1:902105447698:web:7c37241c90a348d82a07cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export { db };
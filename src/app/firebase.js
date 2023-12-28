// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqxFDB7wWti4G2GzamFDhdAzIUO6JdUNw",
  authDomain: "image-db-1bf0d.firebaseapp.com",
  projectId: "image-db-1bf0d",
  storageBucket: "image-db-1bf0d.appspot.com",
  messagingSenderId: "212751466831",
  appId: "1:212751466831:web:9eb42662243ec9e0f9453a",
  measurementId: "G-5SF7Y6YYS1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
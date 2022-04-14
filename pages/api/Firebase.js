import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDQ3FeFclp8_99GshnjpL6WBZb5TuSEe0",
  authDomain: "wellnessplus-f250d.firebaseapp.com",
  projectId: "wellnessplus-f250d",
  storageBucket: "wellnessplus-f250d.appspot.com",
  messagingSenderId: "757752821896",
  appId: "1:757752821896:web:9d1d0fe545d350a782c73d",
  measurementId: "G-8R7SEV7EET",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

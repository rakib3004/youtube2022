import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCg9R5qdzfu4qzJuJhR6JTt47ppkcqU3yA",
  authDomain: "talk-wave-7b01a.firebaseapp.com",
  projectId: "talk-wave-7b01a",
  storageBucket: "talk-wave-7b01a.firebasestorage.app",
  messagingSenderId: "940354716771",
  appId: "1:940354716771:web:c9ca1f722133711d112456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfqTU2sSF8t6LvXXDZXFC1CeLnTIqMxlc",
  authDomain: "talk-wave-829bf.firebaseapp.com",
  projectId: "talk-wave-829bf",
  storageBucket: "talk-wave-829bf.firebasestorage.app",
  messagingSenderId: "773053148168",
  appId: "1:773053148168:web:159bce18910888640f75bd",
  measurementId: "G-YRVJ6Y1LLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

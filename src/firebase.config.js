import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqpKbnpaaEv3Utz34w-HH0YrRpXIVL1Lc",
  authDomain: "house-marketplace-app-d3f37.firebaseapp.com",
  projectId: "house-marketplace-app-d3f37",
  storageBucket: "house-marketplace-app-d3f37.appspot.com",
  messagingSenderId: "88554978124",
  appId: "1:88554978124:web:9b538fa827f94639e8ade9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
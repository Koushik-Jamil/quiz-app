import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuz3uIDOpUYjHiNIBk4T7zYpCaJ5Z8bDI",
  authDomain: "quiz-app-aeeb8.firebaseapp.com",
  projectId: "quiz-app-aeeb8",
  storageBucket: "quiz-app-aeeb8.appspot.com",
  messagingSenderId: "698200443963",
  appId: "1:698200443963:web:9c2f4b42a7a15e9dc8e01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification };
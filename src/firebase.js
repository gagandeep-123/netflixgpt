// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuiU1WAbAo7cn6AbsHZ7kLxHwYEilhU18",
  authDomain: "mynetflix-bda9c.firebaseapp.com",
  projectId: "mynetflix-bda9c",
  storageBucket: "mynetflix-bda9c.appspot.com",
  messagingSenderId: "190789853755",
  appId: "1:190789853755:web:0537500ba1143c94a1721e",
  measurementId: "G-01Z9VPDXCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
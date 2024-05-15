import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEhFhhcF7bnj-owAd8cgIA5-lNB2w9Bkg",
  authDomain: "solosync-a191e.firebaseapp.com",
  projectId: "solosync-a191e",
  storageBucket: "solosync-a191e.appspot.com",
  messagingSenderId: "423238431754",
  appId: "1:423238431754:web:af09367da614ce374a9bf3",
  measurementId: "G-8VPKQ8WF40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
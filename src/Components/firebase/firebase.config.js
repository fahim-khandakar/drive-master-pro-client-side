// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCduJzoUQ_CELgVBp2HT7j_prcmGxyLlwM",
  authDomain: "drive-master-pro-f36e6.firebaseapp.com",
  projectId: "drive-master-pro-f36e6",
  storageBucket: "drive-master-pro-f36e6.appspot.com",
  messagingSenderId: "911039860879",
  appId: "1:911039860879:web:982a258f5bc9347a6d60fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

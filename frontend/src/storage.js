// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArKFFDqMwXZR1QCCJvBmcOUn0ajIISs3Y",
  authDomain: "suparna-7dd6e.firebaseapp.com",
  databaseURL: "https://suparna-7dd6e-default-rtdb.firebaseio.com",
  projectId: "suparna-7dd6e",
  storageBucket: "suparna-7dd6e.appspot.com",
  messagingSenderId: "292555253504",
  appId: "1:292555253504:web:60c37c1ebf88384b6eb5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
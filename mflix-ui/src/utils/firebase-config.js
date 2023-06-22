
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDM0v2rQGBxSWKl9a3NDjV9mjnFlT7ir4",
  authDomain: "react-netflix-clone-3d233.firebaseapp.com",
  projectId: "react-netflix-clone-3d233",
  storageBucket: "react-netflix-clone-3d233.appspot.com",
  messagingSenderId: "1039026689638",
  appId: "1:1039026689638:web:10ea2e25085d6175753fa7",
  measurementId: "G-ECWZHY2TQN"
};

  
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5Ss2PXtWtTSb_RB7NCodibcqNeezrCEQ",
  authDomain: "uploadfile-2deab.firebaseapp.com",
  projectId: "uploadfile-2deab",
  storageBucket: "uploadfile-2deab.appspot.com",
  messagingSenderId: "907448112138",
  appId: "1:907448112138:web:35fbde5d1f5217115bbbf3"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
//export const db = getFirestore();
// const storage = getStorage();

// export {app, db, storage}
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
//firebase-web-config
import firebaseConfig from "./firebase.js";
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//init service
const db = getFirestore(firebaseApp);
//collection ref
const buisRef = collection(db, "business");
const usrRef = collection(db,"user");
//get collection data



ReactDOM.render(
    <App usrRef={usrRef} buisRef={buisRef} />
 ,
  document.getElementById("root")
);

// getDocs(colRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       businesses.push({ ...doc.data() });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
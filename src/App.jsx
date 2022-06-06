import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//firebase-web-config
import firebaseConfig from "./firebase.js";
import "./assests/styles/App.css";
//importing components
import Main from "./components/Main.jsx";
import Home from "./components/routes/Home.jsx";
import Business from "./components/routes/Business.jsx";
import Settings from "./components/routes/Setting.jsx";
import Dashboard from "./components/routes/Dashboard.jsx";
import Users from "./components/routes/User.jsx";
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//init service
const db = getFirestore(firebaseApp);
//collection ref
const colRef = collection(db,'business');
//get collection data
getDocs(colRef)
  .then((snapshot)=>{
    let businesses = [];
    snapshot.docs.forEach((doc)=>{
      businesses.push({ ...doc.data()})
    })
    console.log(businesses);
  })
  .catch((err)=>{
    console.log(err);
  })
 function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
          <Main />
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/businesses" element={<Business />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;

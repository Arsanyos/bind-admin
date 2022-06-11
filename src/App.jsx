/*eslint array-callback-return: ["error"]*/
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import "./assests/styles/App.css";
//importing components
import Main from "./components/Main.jsx";
import Home from "./components/routes/Home.jsx";
import Business from "./components/routes/Business.jsx";
// import Settings from "./components/routes/Setting.jsx";
// import Dashboard from "./components/routes/Dashboard.jsx";
// import Users from "./components/routes/User.jsx";


function App({ colRef }) {
  useEffect(() => {
    handleData();
  },[]);
  const [businesses, setBusinesses] = useState([]);
  function handleData() {
    let list = [];
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          list.push({id:doc.id, ...doc.data()})
        });
        setBusinesses(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
          <Main />
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Home  businesses={businesses} />}
            />
            <Route path="/businesses" element={<Business />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

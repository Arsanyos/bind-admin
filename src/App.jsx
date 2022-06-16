/*eslint array-callback-return: ["error"]*/
import React, { useEffect, useState, useMemo } from "react";
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
import Dashboard from "./components/routes/Dashboard.jsx";
import Users from "./components/routes/User.jsx";
import { DashboardCustomize } from "@mui/icons-material";

function App({ buisRef, usrRef, catRef }) {
  const [categories, setcategories] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [tableData, settableData] = useState([]);
  useEffect(() => {
    getBusinessData();
    getUserData();
    getCategoriesData();
  }, []);

  useEffect(() => {
    handleTabledata();
    handleUsers();
    handleReviews();
  }, [businesses, users]);

  function handleTabledata() {
    let tempData = [];
    users.map((item) => {
      return tempData.push({
        username: item.Username,
        email: item.Email,
        badge: item.Badge,
      });
    });
    settableData(tempData);
  }
  function handleUsers() {
    let size = Object.keys(users).length;
    setUser(size);
  }

  function handleReviews() {
    let totalReivews = 0;
    businesses.map((item) => {
      return (totalReivews += item.Reviews);
    });
    setReviews(totalReivews);
  }
  function getCategoriesData(){
    let list = [];
    getDocs(catRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data().cat });
        });
        setcategories(list);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getUserData() {
    let list = [];
    getDocs(usrRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getBusinessData() {
    let list = [];
    getDocs(buisRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
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
              element={
                <Home user={user} reviews={reviews} businesses={businesses} />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  user={user}
                  reviews={reviews}
                  businesses={businesses.length}
                  categories={categories.length}
                />
              }
            />
            <Route path="/businesses" element={<Business />} />
            <Route
              path="/Users"
              element={<Users tableData={tableData} users={users} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

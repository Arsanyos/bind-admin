/*eslint array-callback-return: ["error"]*/
/*eslint no-undef: 0*/
import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  onSnapshot,
  getFirestore,
  collection,
  where,
  query,
  get,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
//firebase-web-config
import firebaseConfig from "./firebase.js";
import "./assests/styles/App.css";
//importing components
import Main from "./components/Main.jsx";
import Home from "./components/routes/Home.jsx";
import Business from "./components/routes/Business.jsx";
import Dashboard from "./components/routes/Dashboard.jsx";
import Users from "./components/routes/User.jsx";
import Verification from "./components/routes/Verification.jsx";
import { DashboardCustomize } from "@mui/icons-material";
// import { userRecordConstructor } from "firebase-functions/v1/auth";

const App = ({
  buisRef,
  usrRef,
  catRef,
  reviewRef,
  reportedReviewsRef,
  pendingRef,
  firebaseApp,
}) => {
  const [businesses, setBusinesses] = useState([]);
  const [reportedReviews, setReportedReviews] = useState([]);
  const [reportedUsers, setReportedUsers] = useState([]);
  const [reportedUsersRef, setReportedUsersRef] = useState([]);
  const [categories, setcategories] = useState([]);
  const [categoriesSize, setcategoriesSize] = useState(0);
  const [pendingUsersRefs, setPendingUsersRefs] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(0);
  const [reviewsValue, setReviewsValue] = useState(0);
  const [tableData, settableData] = useState([]);
  const db = getFirestore(firebaseApp);
  useEffect(() => {
    (async () => {
      const snapshots = await getDocs(reportedReviewsRef);
      const docs = snapshots.docs.map((doc) => doc.data());
      setReportedReviews(docs);
    })();
  }, [reportedReviewsRef]);
  useEffect(() => {
    const usersRefs = reportedReviews.map((item) => item.Uid);
    console.log(usersRefs);
    setReportedUsersRef(usersRefs);
  }, [reportedReviews]);

  useEffect(() => {
    (async () => {
      let reportedUsersTemp = [];
      reportedUsersRef.forEach(async (item) => {
        const docSnap = await getDoc(item);
        console.log(docSnap);
        reportedUsersTemp.push(docSnap.data());
        console.log(reportedUsersTemp);
      });
      setReportedUsers(reportedUsersTemp);
    })();
  }, [reportedUsersRef]);
  useEffect(() => {
    (async () => {
      const snapshot = await getDocs(buisRef);
      const docs = snapshot.docs.map((doc) => doc.data());
      setBusinesses(docs);
      console.log(reportedUsers);
    })();
  }, [reportedUsers]);
  useEffect(() => {
    (async () => {
      const snapshots = await getDocs(usrRef);
      const docs = snapshots.docs.map((doc) => doc.data());
      console.log(docs);
      setUsers(docs);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const snapshot = await getDocs(pendingRef);
      const docs = snapshot.docs.map((doc)=>doc.data());
     setPendingUsersRefs(docs);
    })();
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
    setReviewsValue(totalReivews);
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
                <Home
                  user={user}
                  reviewsValue={reviewsValue}
                  businesses={businesses}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  users={users}
                  user={user}
                  reviewsValue={reviewsValue}
                  businesses={businesses.length}
                  categoriesSize={categoriesSize}
                  reportedReviews={reportedReviews}
                  reviewRef={reviewRef}
                  setReportedReviews={setReportedReviews}
                  reportedUsers={reportedUsers}
                />
              }
            />
            <Route path="/businesses" element={<Business />} />
            <Route
              path="/verification"
              element={<Verification pendingUsersRefs={pendingUsersRefs} />}
            />
            <Route
              path="/users"
              element={<Users tableData={tableData} users={users} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;

import React, { useEffect } from "react";
import "../../assests/styles/Dashboard.css";
import { FaUserCircle } from "react-icons/fa";
import Popup from "reactjs-popup";
import { doc, deleteDoc } from "firebase/firestore";
import {
  collectionGroup,
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

const Dashboard = ({
  reportedUsers,
  reviewsValue,
  reportedReviews,
  businesses,
  user,

  reviewRef,

  firebaseApp,
}) => {
  const db = getFirestore(firebaseApp);

  function handleDelete(rid) {
    let x = query(reviewRef, where("Rid", "==", rid));
    getDocs(x)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          deleteDoc(doc.ref);
          console.log(doc.data());
        });
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Deleted successfuly");
  }

  useEffect(() => {
    console.log(reportedUsers);
    console.log(reportedReviews);
  }, [reportedUsers, reportedReviews]);

  const displayReportedReviews = reportedReviews.map((item) => {
    return (
      <React.Fragment>
        <Popup
          trigger={
            <div className="reported-reviews-container">
              <div className="content-container">
                <p>{item.Content}</p>
              </div>
              <div className="vl"></div>
              <div className="analytics-container">
                <p>Reports:{item.Reports}</p>
                <p>Rating:{item.Rating}</p>
              </div>
            </div>
          }
          position="center"
          closeOnDocumentClick
        >
          <div className="reported-reviews-popup-container">
            <h4>Reported review information</h4>
            <p className="content">{item.Content}</p>
            <div className="specs-ractions">
              <div className="specifics">
                <p>Reports : {item.Reports}</p>
                <p>Rating: {item.Rating}</p>
                <p>Date posted:{item.Date}</p>
                <p>Posted by:asdasfsdfsfsdf</p>
              </div>
              <div className="react-container">
                <button>Ignore</button>
                <button onClick={() => handleDelete(item.Rid)}>Delete</button>
              </div>
            </div>
          </div>
        </Popup>
      </React.Fragment>
    );
  });
  const displayReportedUsers = reportedUsers.map((item) => {
    return (
      <React.Fragment>
        <Popup
          trigger={
            <div className="reported-users-container">
              <div className="content-container">
                <FaUserCircle className="user-icon" size={42} />
              </div>
              <div className="vl"></div>
              <div className="analytics-container">
                <p>Badge: {item.Badge}</p>
                <p>Username:{item.Username}</p>
                <p>Email:{item.Email}</p>
              </div>
            </div>
          }
        >
          <div className="reported-users-popup-container">
            <ul>
              <li>Username: {item.Username}</li>
              <li>Firstname: {item.FirstName} </li>
              <li>lastname: {item.LastName}</li>
              <li>Email: {item.Email}</li>
            </ul>
            <div className="users-popup">
              <button>Ignore</button>
              <button>Ban</button>
            </div>
          </div>
        </Popup>
      </React.Fragment>
    );
  });
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-container-cards">
        <div className="reviews container card">
          <span>{reviewsValue}</span>
          <p>Reviews</p>
        </div>
        <div className="buisnesses container card">
          <span>{businesses}</span>
          <p>Businesses</p>
        </div>
        <div className="users container card">
          <span>{user}</span>
          <p>Users</p>
        </div>
        <div className="catagories container card">
          <span>12</span>
          <p>Businesses Categories</p>
        </div>
      </div>
      <div className="reviews-users-reported-container">
        <div className="reviews reported">
          <h3>Reported reviews</h3>
          {displayReportedReviews}
        </div>

        <div className="users reported">
          <h3>Reported users</h3>
          {displayReportedUsers}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

import React, { useEffect, useState } from "react";
import "../../assests/styles/Home.css";
import admin from "../../assests/images/undraw_financial_data_re_p0fl.svg";
//importing css
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { BsPeople } from "react-icons/bs";
//firestore
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

// ----------------

function Home({ businesses }) {
  const [count, setCount] = useState(0);
  useEffect(() =>{ handleReviews()});

  function handleReviews() {
    console.log(businesses);
  }

  return (
    <div className="home-main-container tu">
      <div className="welcome-container">
        <div className="welcome-heading">
          <h1>Hi Arsan</h1>
          <h1>Welcome back!</h1>
        </div>
        <div className="welcome-message">
          <p>
            This page is designed to give some important information about the
            application. Let's make someting together!
          </p>
        </div>
        <div className="welcome-admin-illu">
          <img src={admin} alt="React Logo" height="200px" width="250px" />
        </div>
      </div>
      <div className="mini-analytics-container">
        <div className="reactions-preview-container">
          <div className="like-container">
            <FcLike size={38} />
            <div className="numeric-value-container">
              <span>24,000</span>
              <br />
              <span>Loves</span>
            </div>
          </div>
          <div className="users-container">
            <BsPeople size={38} />{" "}
            <div className="numeric-value-container">
              <span>30,000</span>
              <br />
              <span>Registered users</span>
            </div>
          </div>
          <div className="review-container">
            <FcComments size={38} />
            <div className="numeric-value-container">
              <span>{count}</span>
              <br />
              <span>Reviews</span>
            </div>
          </div>
        </div>
        <div className="views-preview-container"></div>
      </div>
      <div className="targets-container"></div>
    </div>
  );
}
export default Home;

import React from "react";
import "../../assests/styles/Home.css";
import admin from "../../assests/images/undraw_financial_data_re_p0fl.svg"
function Home() {
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
      <div className="mini-analytics-container"></div>
      <div className="targets-container"></div>
    </div>
  );
}
export default Home;

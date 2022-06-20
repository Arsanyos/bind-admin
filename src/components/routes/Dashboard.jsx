import React from "react";
import "../../assests/styles/Dashboard.css";

function Dashboard({ reportedReviews, businesses, user, categories }) {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-container-cards">
        <div className="reviews container card">
          <span>12</span>
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
          <span>{categories}</span>
          <p>Businesses Categories</p>
        </div>
      </div>
      <div className="reviews-users-reported-container">
        <div className="reviews reported">
          <h3>Reported reviews</h3>
          {reportedReviews.map((item) => {
            return (
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
            );
          })}
        </div>
        <div className="users reported">xcv</div>
      </div>
    </div>
  );
}
export default Dashboard;

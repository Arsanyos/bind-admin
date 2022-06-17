import React from "react";
import "../../assests/styles/Dashboard.css";


function Dashboard({ reviews, businesses, user, categories}) {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-container-cards">
        <div className="reviews container card">
          <span>{reviews}</span>
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
            <div className="reviews reported">asd</div>
            <div className="users reported">xcv</div>
        </div>
    </div>
  );
}
export default Dashboard;

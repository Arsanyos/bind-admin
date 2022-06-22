import React, { useState, useEffect } from "react";
import "../../assests/styles/Verification.css";
function Verification({ pendingUsersRefs }) {
  useEffect(() => {
    
  }, []);
  const pendingUsersCont = pendingUsersRefs.map((item) => {
    return (
      <div className="verify-user-container">
        <div className="user-buisness-link-container"></div>
        <span></span>
        <div className="verify-container">
          <div className="doc-verify-container">{item.Firstname}</div>
          <div className="user-status-container">xcv</div>
          <div className="verify-button">qwqe</div>
        </div>
      </div>
    );
  });
  return <div className="verification-main-container">
    {pendingUsersCont}
  </div>;
}
export default Verification;

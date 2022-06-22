import React, { useState, useEffect } from "react";
import "../../assests/styles/Verification.css";
function Verification() {
  return (
    <div className="verification-main-container">
      <div className="verify-user-container"></div>
      <span></span>
      <div className="verify-container">
        <div className="doc-verify-container"></div>
        <div className="user-status-container"></div>
        <div className="verify-button"></div>
      </div>
    </div>
  );
}
export default Verification;

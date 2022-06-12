import React, { useEffect } from "react";

import "../../assests/styles/User.css";

function User({ users }) {
    const columns=["User","Username","Badge",""];
  return (
    <div className="user-main-container">
      <div className="link-header-name">
        <h1>Users</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default User;

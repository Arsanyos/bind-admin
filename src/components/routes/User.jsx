import React, { useEffect, useState, useRef } from "react";
//importing icons
import { BiUserCircle } from "react-icons/bi";
//react-bootstaptable-2
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../assests/styles/User.css";

function User({ users, tableData }) {
  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return (
    <div className="user-main-container">
      <div className="link-header-name">
        <h1>Users</h1>
      </div>
      <div className="table-container">
        <table width="130%">
          <thead>
            <tr>
              <th width="50%">Username</th>
              <th width="40%">Email</th>
              <th width="50%">Badges</th>
              <th width="20%">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => {
              return (
              
                  <tr bgcolor="white">
                    <td  width="50%">{item.username}</td>
                    <td width="40%">{item.email}</td>
                    <td width="40%">{item.badge}</td>
                    <td width="40%">Active</td>
                  </tr>
               
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default User;

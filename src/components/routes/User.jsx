import React, { useEffect, useState,useRef } from "react";
//importing icons
import { BiUserCircle } from "react-icons/bi";
//react-bootstaptable-2
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../assests/styles/User.css";

function User({ users,tableData }) {
  
useEffect(()=>{
  console.log(tableData);
},[tableData])
  
  return (
    <div className="user-main-container">
      <div className="link-header-name">
        <h1>Users</h1>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Badges</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item)=>{
              return(<tr>
                <td>{item.username}</td>
                <th>{item.email}</th>
                <th>{item.badge}</th>
                <th>"Active"</th>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default User;

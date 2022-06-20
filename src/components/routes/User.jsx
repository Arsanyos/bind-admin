import React, { useEffect, useState, useRef } from "react";
//importing icons
import { BiUserCircle } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
//react-bootstaptable-2
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../assests/styles/User.css";
import ReactPaginate from "react-paginate";
import Popup from "reactjs-popup";
function User({ users, tableData }) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 2;
  const Visited = pageNumber * itemsPerPage;
  const displayTable = users
    .slice(Visited, Visited + itemsPerPage)
    .map((item) => {
      return (
        <tbody>
          <Popup
            trigger={
              <tr bgcolor="white">
                <td width="50%">{item.Username}</td>
                <td width="40%">{item.Email}</td>
                <td width="40%">{item.Badge}</td>
                <td width="40%">Active</td>
              </tr>
            }
            position="center"
            closeOnDocumentClick
          >
             
            <div className="popup-container">
              <h3>User info</h3>
              <br />
              <p>
                <span>FirstName</span> {item.FirstName}
              </p>
              <p>
                <span>LastName</span> {item.LastName}
              </p>
              <p>
                <span>Email</span> {item.Email}
              </p>
              <p>
                <span>Username</span> {item.Username}
              </p>
              <button
                className="popup-copy-button"
                onClick={() => {
                  let temp = JSON.stringify(item);
                  navigator.clipboard.writeText(JSON.parse(temp));
                  alert("User json data copied to clipboard");
                }}
              >
               <FiCopy size="20"/>
              </button>
            </div>
          </Popup>
        </tbody>
      );
    });

  const pageCount = Math.ceil(tableData.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const showTable = () => {};
  useEffect(() => {
    showTable();
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
          {displayTable}
        </table>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}
export default User;

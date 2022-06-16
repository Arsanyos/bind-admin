import React, { useEffect, useState, useRef } from "react";
//importing icons
import { BiUserCircle } from "react-icons/bi";
//react-bootstaptable-2
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../assests/styles/User.css";
import ReactPaginate from "react-paginate";

function User({ users, tableData }) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 2;
  const Visited = pageNumber * itemsPerPage;
  const displayTable = tableData
    .slice(Visited, Visited + itemsPerPage)
    .map((item) => {
      return (
        <tbody>
          <tr bgcolor="white">
            <td width="50%">{item.username}</td>
            <td width="40%">{item.email}</td>
            <td width="40%">{item.badge}</td>
            <td width="40%">Active</td>
          </tr>
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

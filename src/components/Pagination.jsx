import React, { useState, useEffect } from "react";
import "../assests/styles/Pagination.css";

import ReactPaginate from "react-paginate";
function Pagination({ tableData,setCurrentItems }) {
  const itemsPerPage = 2;

  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(tableData);
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tableData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tableData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tableData.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default Pagination;

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems({ itemsPerPage = 4 }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = repo.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repo.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repo.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="paginate-items">
      <Repos myRepo={currentItems} />
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;

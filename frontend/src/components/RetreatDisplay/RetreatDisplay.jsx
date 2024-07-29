import { useState } from "react";
import RetreatCard from "../RetreatCard/RetreatCard";
import "./RetreatDisplay.css";
const RetreatDisplay = ({ filteredEvents }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredEvents.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="retreat-container">
        {currentItems.map((retreat, index) => (
          <RetreatCard key={index} {...retreat} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === page ? "active" : ""}>
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default RetreatDisplay;

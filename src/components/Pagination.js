import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const items = [];

  // Add First and Previous buttons
  items.push(
    <Pagination.First key="first" title="First" onClick={() => onPageChange(1)} />,
    <Pagination.Prev
      key="prev"
      title="Previous"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    />
  );

  // Add page numbers
  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  // Add Next and Last buttons
  items.push(
    <Pagination.Next
      key="next"
      title="Next"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    />,
    <Pagination.Last key="last" title="Last" onClick={() => onPageChange(totalPages)} />
  );

  return <Pagination>{items}</Pagination>;
};

export default PaginationComponent;

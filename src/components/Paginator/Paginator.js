import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Paginator = ({ count }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || 1);

  const handlePageChange = newPage => {
    const newQueryParams = new URLSearchParams(location.search);
    newQueryParams.set('page', newPage);
    navigate.push(`${location.pathname}?${newQueryParams.toString()}`);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < count) {
      handlePageChange(currentPage + 1);
    }
  };

  if (count <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`mr-4 ${
          currentPage === 1 ? 'opacity-50 cursor-default' : ''
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="text-gray-500">
        Page {currentPage} of {count}
      </span>
      <button
        className={`ml-4 ${
          currentPage === count ? 'opacity-50 cursor-default' : ''
        }`}
        onClick={handleNextClick}
        disabled={currentPage === count}
      >
        Next
      </button>
    </div>
  );
};

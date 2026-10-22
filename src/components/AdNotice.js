'use client';

import React, { useState, useEffect } from 'react';

const AdNotice = () => {
  const [showFull, setShowFull] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleFullMessage = () => {
    setShowFull(!showFull);
  };

  const closeNotice = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Hide after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 absolute top-20 left-0 w-full" style={{zIndex:33}}>
      <button
        onClick={closeNotice}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        ✕
      </button>
      <p className="text-sm text-gray-800">
        This site uses ads for revenue.{' '}
        {!showFull && (
          <button
            onClick={toggleFullMessage}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            More
          </button>
        )}
      </p>
      {showFull && (
        <p className="text-sm text-gray-800 mt-2">
          Please avoid registering for ads displayed. If a pop-up ad opens a new page, return to our site and click the "Apply Now" button.
          <button
            onClick={toggleFullMessage}
            className="text-blue-600 hover:underline focus:outline-none ml-1"
          >
            Less
          </button>
        </p>
      )}
    </div>
  );
};

export default AdNotice;

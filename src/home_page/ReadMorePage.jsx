// ReadMorePage.js
import React from 'react';
import "./ReadMorePage.css";

const ReadMorePage = ({ onClose }) => {
  return (
    <div className="blur-background">
      <div className="content1">
        <h2>What to Do & Don'ts during flood?</h2>
        <p>
          Here you can provide detailed information about what to do and what not to do during a flood.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ReadMorePage;

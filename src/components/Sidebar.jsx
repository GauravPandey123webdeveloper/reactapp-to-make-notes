

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-item">Home</div>
      <div className="menu-item">My Notes</div>
      <div className="menu-item">History</div>
      <div className="menu-item">About</div>
      <div className="menu-item">Login</div>
      <div className="menu-item">Log Out</div>
    </div>
  );
}

export default Sidebar;

// src/components/Navbar.js

import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/Navbar.css';
import Sidebar from './Sidebar'; // Import the Sidebar component
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  // State to manage Sidebar visibility, set to false to start closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  // Function to handle admin button click (currently just a placeholder)
  const handleAdminClick = () => {
    navigate('/admin');
    console.log('Admin button clicked');
  };

  return (
    <div>
      {/* Render the Sidebar component and pass isSidebarOpen as a prop */}
      <Sidebar isOpen={isSidebarOpen} />

      <div className="navbar">
        <div className="navbar-left">
          {/* Menu icon that toggles the Sidebar visibility */}
          <BsList className="menu-icon" onClick={toggleSidebar} />

          <div className="search-container">
            <AiOutlineSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>

        <div className="navbar-right">
          <select className="language-select">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>

          {/* <button className="admin-button" onClick={handleAdminClick}>
          <img src="/public/.png" alt="" className="admin-icon" />

          </button> */}

          <button className='admin-button'  onClick={handleAdminClick}>Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaTachometerAlt, FaBox, FaHeart, FaInbox, FaListUl, FaCubes, 
  FaMoneyBillWave, FaCalendarAlt, FaClipboardCheck, FaUsers, 
  FaFileInvoiceDollar, FaCode, FaUserFriends, FaTable, FaCog, FaPowerOff 
} from "react-icons/fa";
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>DashStack</h2>
      </div>
      <div className="sidebar-nav">
        <NavLink 
          to="/" 
          className={`sidebar-item ${activeItem === 'dashboard' ? 'active' : ''}`} 
          onClick={() => handleItemClick('dashboard')}
        >
          <span className="icon"><FaTachometerAlt /></span>
          <span className="text">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/products" 
          className={`sidebar-item ${activeItem === 'products' ? 'active' : ''}`} 
          onClick={() => handleItemClick('products')}
        >
          <span className="icon"><FaBox /></span>
          <span className="text">Products</span>
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={`sidebar-item ${activeItem === 'favorites' ? 'active' : ''}`} 
          onClick={() => handleItemClick('favorites')}
        >
          <span className="icon"><FaHeart /></span>
          <span className="text">Favorites</span>
        </NavLink>



        <NavLink 
          to="/inbox" 
          className={`sidebar-item ${activeItem === 'inbox' ? 'active' : ''}`} 
          onClick={() => handleItemClick('inbox')}
        >
          <span className="icon"><FaInbox /></span>
          <span className="text">Inbox</span>
        </NavLink>
        
        <NavLink 
          to="/Orderlist" 
          className={`sidebar-item ${activeItem === 'Orderlist' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Orderlist')}
        >
          <span className="icon"><FaListUl /></span>
          <span className="text">OrderList</span>
        </NavLink>
        
        <NavLink 
          to="/ProductStock" 
          className={`sidebar-item ${activeItem === 'ProductStock' ? 'active' : ''}`} 
          onClick={() => handleItemClick('ProductStock')}
        >
          <span className="icon"><FaCubes /></span>
          <span className="text">ProductStock</span>
        </NavLink>


        <h3 className="sidebar-title">Pages</h3>
        <NavLink 
          to="/pricing" 
          className={`sidebar-item ${activeItem === 'pricing' ? 'active' : ''}`} 
          onClick={() => handleItemClick('pricing')}
        >
          <span className="icon"><FaMoneyBillWave /></span>
          <span className="text">Pricing</span>
        </NavLink>
        <NavLink 
          to="/Calendar" 
          className={`sidebar-item ${activeItem === 'Calendar' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Calendar')}
        >
          <span className="icon"><FaCalendarAlt /></span>
          <span className="text">Calendar</span>
        </NavLink>
        <NavLink 
          to="/todo" 
          className={`sidebar-item ${activeItem === 'To-Do' ? 'active' : ''}`} 
          onClick={() => handleItemClick('To-Do')}
        >
          <span className="icon"><FaClipboardCheck /></span>
          <span className="text">To-Do</span>
        </NavLink>
        <NavLink 
          to="/contact" 
          className={`sidebar-item ${activeItem === 'contact' ? 'active' : ''}`} 
          onClick={() => handleItemClick('contact')}
        >
          <span className="icon"><FaUsers /></span>
          <span className="text">Contact</span>
        </NavLink>
        <NavLink 
          to="/invoice" 
          className={`sidebar-item ${activeItem === 'invoice' ? 'active' : ''}`} 
          onClick={() => handleItemClick('invoice')}
        >
          <span className="icon"><FaFileInvoiceDollar /></span>
          <span className="text">Invoice</span>
        </NavLink>
        <NavLink 
          to="/ui-elements" 
          className={`sidebar-item ${activeItem === 'ui-elements' ? 'active' : ''}`} 
          onClick={() => handleItemClick('ui-elements')}
        >
          <span className="icon"><FaCode /></span>
          <span className="text">UI Elements</span>
        </NavLink>
        <NavLink 
          to="/team" 
          className={`sidebar-item ${activeItem === 'team' ? 'active' : ''}`} 
          onClick={() => handleItemClick('team')}
        >
          <span className="icon"><FaUserFriends /></span>
          <span className="text">Team</span>
        </NavLink>

        
        <NavLink 
          to="/table" 
          className={`sidebar-item ${activeItem === 'table' ? 'active' : ''}`} 
          onClick={() => handleItemClick('table')}
        >
          <span className="icon"><FaTable /></span>
          <span className="text">Table</span>
        </NavLink>




        <h3 className="sidebar-title">Settings</h3>
        <NavLink 
          to="/settings" 
          className={`sidebar-item ${activeItem === 'settings' ? 'active' : ''}`} 
          onClick={() => handleItemClick('settings')}
        >
          <span className="icon"><FaCog /></span>
          <span className="text">Settings</span>
        </NavLink>
        <NavLink 
          to="/logout" 
          className={`sidebar-item ${activeItem === 'logout' ? 'active' : ''}`} 
          onClick={() => handleItemClick('logout')}
        >
          <span className="icon"><FaPowerOff /></span>
          <span className="text">Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

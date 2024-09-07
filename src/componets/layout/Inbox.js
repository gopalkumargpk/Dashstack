// InboxPage.js
import React from 'react';
import '../../App.css';
import '../styles/Inbox.css';
import { FaEnvelope, FaStar, FaPaperPlane, FaPenSquare, FaExclamationTriangle, FaBell, FaTrash } from 'react-icons/fa';


const InboxPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h1>Inbox</h1>
      </div>

      <div className="container">
        <button className="compose-button">+Compose</button>
        
        <ul className="email-list">
          <li className="email-item">
            <span className="email-icon"><FaEnvelope /></span>


            <span className="email-label">Inbox</span>

            <span className="email-count">1253</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaStar /></span>
            <span className="email-label">Starred</span>
            <span className="email-count">245</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaPaperPlane /></span>
            <span className="email-label">Sent</span>
            <span className="email-count">24,532</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaPenSquare /></span>
            <span className="email-label">Draft</span>
            <span className="email-count">09</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaExclamationTriangle /></span>
            <span className="email-label">Spam</span>
            <span className="email-count">14</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaBell /></span>
            <span className="email-label">Important</span>
            <span className="email-count">18</span>
          </li>
          <li className="email-item">
            <span className="email-icon"><FaTrash /></span>
            <span className="email-label">Bin</span>
            <span className="email-count">9</span>
          </li>
        </ul>

        <div className="label-section">
          <h3 className="label-title">Label</h3>
          <div className="label-item">
            <input type="checkbox" className="label-checkbox" />
            <span>Primary</span>
          </div>
          <div className="label-item">
            <input type="checkbox" className="label-checkbox" />
            <span>Social</span>
          </div>
          <div className="label-item">
            <input type="checkbox" className="label-checkbox" />
            <span>Work</span>
          </div>
          <div className="label-item">
            <input type="checkbox" className="label-checkbox" />
            <span>Friends</span>
          </div>
          <span className="create-label">Create New Label</span>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;

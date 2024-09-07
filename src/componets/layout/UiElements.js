import React from 'react';
import '../../App.css';
import '../styles/UiElements.css';

function UiElements() {
  return (
    <div>
      <h1>UI Elements</h1>
      <div className="filter">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.5 3.5l2.5 2.5L13 3.5"
              stroke="#6c757d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Filter By</span>
        <span>
          <select>
            <option value="Charts">Charts</option>
          </select>
        </span>
      </div>

      <div className="chart-container">
        <h2>Bar Chart</h2>
        <div className="chart-group">
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="80" width="10" height="20" fill="#4285F4" />
              <rect x="25" y="75" width="10" height="25" fill="#4285F4" />
              <rect x="40" y="85" width="10" height="15" fill="#4285F4" />
              <rect x="55" y="70" width="10" height="30" fill="#4285F4" />
              <rect x="70" y="80" width="10" height="20" fill="#4285F4" />
              <rect x="85" y="85" width="10" height="15" fill="#4285F4" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="50" width="10" height="50" fill="#BDE4FF" />
              <rect x="25" y="45" width="10" height="55" fill="#BDE4FF" />
              <rect x="40" y="55" width="10" height="45" fill="#BDE4FF" />
              <rect x="55" y="40" width="10" height="60" fill="#BDE4FF" />
              <rect x="70" y="50" width="10" height="50" fill="#BDE4FF" />
              <rect x="85" y="55" width="10" height="45" fill="#BDE4FF" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="60" width="10" height="40" fill="#00C497" />
              <rect x="25" y="55" width="10" height="45" fill="#00C497" />
              <rect x="40" y="65" width="10" height="35" fill="#00C497" />
              <rect x="55" y="50" width="10" height="50" fill="#00C497" />
              <rect x="70" y="60" width="10" height="40" fill="#00C497" />
              <rect x="85" y="65" width="10" height="35" fill="#00C497" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="30" width="10" height="70" fill="#4285F4" />
              <rect x="25" y="25" width="10" height="75" fill="#4285F4" />
              <rect x="40" y="35" width="10" height="65" fill="#4285F4" />
              <rect x="55" y="20" width="10" height="80" fill="#FF6D00" />
              <rect x="70" y="30" width="10" height="70" fill="#4285F4" />
              <rect x="85" y="35" width="10" height="65" fill="#4285F4" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="70" width="10" height="30" fill="#FF6D00" />
              <rect x="25" y="65" width="10" height="35" fill="#FF6D00" />
              <rect x="40" y="75" width="10" height="25" fill="#FF6D00" />
              <rect x="55" y="60" width="10" height="40" fill="#FF6D00" />
              <rect x="70" y="70" width="10" height="30" fill="#FF6D00" />
              <rect x="85" y="75" width="10" height="25" fill="#FF6D00" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <rect x="10" y="80" width="10" height="20" fill="#FF5252" />
              <rect x="25" y="75" width="10" height="25" fill="#FF5252" />
              <rect x="40" y="85" width="10" height="15" fill="#FF5252" />
              <rect x="55" y="70" width="10" height="30" fill="#FF5252" />
              <rect x="70" y="80" width="10" height="20" fill="#FF5252" />
              <rect x="85" y="85" width="10" height="15" fill="#FF5252" />
            </svg>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h2>Pie Chart</h2>
        <div className="chart-group">
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="#fff" />
              <path
                d="M50 50 L50 10 A40 40 0 0 1 90 50 Z"
                fill="#4285F4"
              />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="#fff" />
              <path
                d="M50 50 L50 10 A40 40 0 0 1 90 50 Z"
                fill="#CE93D8"
              />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="#fff" />
              <path
                d="M50 50 L50 10 A40 40 0 0 1 90 50 Z"
                fill="#FF6D00"
              />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="#fff" />
              <path
                d="M50 50 L50 10 A40 40 0 0 1 90 50 Z"
                fill="#4285F4"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h2>Donut Chart</h2>
        <div className="chart-group">
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="#fff" />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#00C497"
                strokeWidth="10"
              />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="#fff" />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#4285F4"
                strokeWidth="10"
              />
              <circle cx="50" cy="50" r="20" fill="#FF6D00" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="#fff" />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#00C497"
                strokeWidth="10"
              />
              <circle cx="50" cy="50" r="20" fill="#FF6D00" />
            </svg>
          </div>
          <div className="chart">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="30" fill="#fff" />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="#00C497"
                strokeWidth="10"
              />
              <circle cx="50" cy="50" r="20" fill="#FF6D00" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiElements;

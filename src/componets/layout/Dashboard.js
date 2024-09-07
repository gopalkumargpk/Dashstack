import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/SalesDetails.css';
import '../styles/Dashboard.css';

// Sample data for the sales chart
const data = [
  { name: '5k', Sales: 20 }, { name: '6k', Sales: 25 }, { name: '7k', Sales: 27 },
  // ... (Rest of the data as provided earlier)
  { name: '60k', Sales: 55 },
];

const DealsDetails = () => {
  return (
    <div className="deals-details">
      <h2 className="deals-title">Deals Details</h2>
      <div className="deals-table">
        <div className="header">
          <div className="product-name">Product Name</div>
          <div className="location">Location</div>
          <div className="date-time">Date - Time</div>
          <div className="piece">Piece</div>
          <div className="amount">Amount</div>
          <div className="status">Status</div>
        </div>
        <div className="row">
          <div className="product-name">
            <img src="https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png" alt="Apple Watch" />
            Apple Watch
          </div>
          <div className="location">6096 Marjolaine Landing</div>
          <div className="date-time">12.09.2019 - 12.53 PM</div>
          <div className="piece">423</div>
          <div className="amount">$34,295</div>
          <div className="status">
            <button className="delivered">Delivered</button>
          </div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        <div className="card">
          <div className="card-header">
            <h3>Total User</h3>
            <div className="icon">
              {/* SVG icon */}
            </div>
          </div>
          <div className="card-body">
            <div className="value">40,689</div>
            <div className="progress">
              {/* Progress Icon */}
              <span>8.5% Up from yesterday</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Total Order</h3>
            <div className="icon">
              {/* SVG icon */}
            </div>
          </div>
          <div className="card-body">
            <div className="value">$89,000</div>
            <div className="progress">
              {/* Progress Icon */}
              <span>4.3% Down from yesterday</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Total Pending</h3>
            <div className="icon">
              {/* SVG icon */}
            </div>
          </div>
          <div className="card-body">
            <div className="value">2,040</div>
            <div className="progress">
              {/* Progress Icon */}
              <span>1.8% Up from yesterday</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Total Revenue</h3>
            <div className="icon">
              {/* SVG icon */}
            </div>
          </div>
          <div className="card-body">
            <div className="value">$120,000</div>
            <div className="progress">
              {/* Progress Icon */}
              <span>6.2% Up from yesterday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Details Section */}
      <div className="sales-details">
        <h2 className="sales-title">Sales Details</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 50, left: 140, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Deals Details Section */}
      <DealsDetails />
    </div>
  );
};

export default Dashboard;

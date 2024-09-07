import React from 'react';
import '../../App.css';
import '../styles/Pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h3>Basic</h3>
        <p className="monthly-charge">$14.99</p>
        <ul>
          <li>Free Setup</li>
          <li>Bandwidth Limit 10 GB</li>
          <li>20 User Connection</li>
          <li>Analytics Report</li>
          <li>Public API Access</li>
          <li>Plugins Integration</li>
          <li>Custom Content Management</li>
        </ul>
        <button className="get-started">Get Started</button>
        <p className="free-trial">Start Your 30 Day Free Trial</p>
      </div>
      <div className="pricing-card">
        <h3>Standard</h3>
        <p className="monthly-charge">$49.99</p>
        <ul>
          <li>Free Setup</li>
          <li>Bandwidth Limit 10 GB</li>
          <li>20 User Connection</li>
          <li>Analytics Report</li>
          <li>Public API Access</li>
          <li>Plugins Integration</li>
          <li>Custom Content Management</li>
        </ul>
        <button className="get-started">Get Started</button>
        <p className="free-trial">Start Your 30 Day Free Trial</p>
      </div>
      <div className="pricing-card">
        <h3>Premium</h3>
        <p className="monthly-charge">$89.99</p>
        <ul>
          <li>Free Setup</li>
          <li>Bandwidth Limit 10 GB</li>
          <li>20 User Connection</li>
          <li>Analytics Report</li>
          <li>Public API Access</li>
          <li>Plugins Integration</li>
          <li>Custom Content Management</li>
        </ul>
        <button className="get-started">Get Started</button>
        <p className="free-trial">Start Your 30 Day Free Trial</p>
      </div>
    </div>
  );
}

export default Pricing;

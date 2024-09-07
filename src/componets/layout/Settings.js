import React, { useState } from 'react';
import '../../App.css'; // Path to your global App styles
import '../styles/Settings.css'; // New CSS file for the settings page

function Settings() {
  const [storeName, setStoreName] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [contactEmail, setContactEmail] = useState('');
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (event) => {
    if (event.target.files[0]) {
      setLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Settings submitted:', {
      storeName,
      currency,
      paymentMethod,
      shippingMethod,
      contactEmail,
      logo,
    });
  };

  return (
    <div className="settings">
      <h1 className="title">Store Settings</h1>
      <form onSubmit={handleSubmit}>
        <section className="settings-section">
          <h2>Store Information</h2>
          <div className="form-group">
            <label htmlFor="storeName">Store Name:</label>
            <input
              type="text"
              id="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Enter your store name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email:</label>
            <input
              type="email"
              id="contactEmail"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="Enter contact email"
            />
          </div>
        </section>

        <section className="settings-section">
          <h2>Logo</h2>
          <div className="form-group">
            <label htmlFor="logoUpload" className="custom-file-upload">
              Upload Logo
            </label>
            <input
              type="file"
              id="logoUpload"
              accept="image/*"
              onChange={handleLogoChange}
            />
            {logo && (
              <div className="logo-preview">
                <img src={logo} alt="Logo Preview" />
              </div>
            )}
          </div>
        </section>

        <section className="settings-section">
          <h2>Currency</h2>
          <div className="form-group">
            <label htmlFor="currency">Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies as needed */}
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h2>Payment Settings</h2>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
              <option value="square">Square</option>
              {/* Add more payment methods as needed */}
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h2>Shipping Settings</h2>
          <div className="form-group">
            <label htmlFor="shippingMethod">Shipping Method:</label>
            <select
              id="shippingMethod"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <option value="standard">Standard</option>
              <option value="express">Express</option>
              <option value="overnight">Overnight</option>
              {/* Add more shipping methods as needed */}
            </select>
          </div>
        </section>

        <button type="submit" className="submit-button">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;

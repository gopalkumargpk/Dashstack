import React from 'react';
import '../styles/Products.css';

const Products = () => {
  const deals = [
    // Example deal data
    {
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
      productName: 'Sample Deal Product',
      location: 'New York',
      dateTime: 'September 15, 2024 - 2:00 PM',
      piece: '5',
      amount: '$100',
      status: 'Pending'
    },
    // Add more deals as needed
  ];

  const products = [
    {
      name: 'Apple Watch Series 4',
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png', // Replace with correct image URL
      price: 120.0,
      reviews: 131,
    },
    {
      name: 'Samsung Galaxy Watch',
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png', // Replace with correct image URL
      price: 150.0,
      reviews: 95,
    },
    {
      name: 'Fitbit Charge 4',
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png', // Replace with correct image URL
      price: 100.0,
      reviews: 89,
    },
  ];

  return (
    <>
      <div>
        {/* Banner Content Section */}
        <div className="banner-content">
          <div className="banner-text">
            <p>September 12-22</p>
            <h2>Enjoy free home delivery this summer</h2>
            <p>Designer Dresses - Pick from trendy Designer Dress.</p>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
      </div>

      {/* Deals Details Section */}
      {deals.length > 0 && (
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
            {deals.map((deal, index) => (
              <div className="row" key={index}>
                <div className="product-name">
                  <img
                    src={deal.image}
                    alt={deal.productName}
                    style={{ width: '50px', height: '50px' }} // Adjust size as needed
                  />
                  {deal.productName}
                </div>
                <div className="location">{deal.location}</div>
                <div className="date-time">{deal.dateTime}</div>
                <div className="piece">{deal.piece}</div>
                <div className="amount">{deal.amount}</div>
                <div className="status">
                  <button className="delivered">{deal.status}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products Section */}
      <div className="products-container">
        <h1>Products</h1>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100px', height: '100px' }} // Adjust size as needed
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <div className="ratings">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="star">
                      {i < Math.round(product.reviews / 25) ? '★' : '☆'}
                    </span>
                  ))}
                  <span>({product.reviews})</span>
                </div>
                <button className="edit-button">Edit Product</button>
              </div>
              <div className="heart-icon">♥</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

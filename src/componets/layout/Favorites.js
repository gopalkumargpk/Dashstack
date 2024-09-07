import React from 'react';
import '../../App.css'; // Correct path to App.css from components/layout
import '../styles/Favorites.css';

function Favorites() {
  const products = [
    {
      id: 1,
      name: 'Apple Watch Series 4',
      price: 120.0,
      rating: 4,
      reviews: 131,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
    {
      id: 2,
      name: 'Air-Max-270',
      price: 60.0,
      rating: 3,
      reviews: 64,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
    {
      id: 3,
      name: 'Minimal Chair Tool',
      price: 24.59,
      rating: 4,
      reviews: 63,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
    {
      id: 4,
      name: 'Amazfit Vip',
      price: 79.99,
      rating: 4,
      reviews: 231,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
    {
      id: 5,
      name: 'Gumbo Mouse',
      price: 12.99,
      rating: 5,
      reviews: 87,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
    {
      id: 6,
      name: 'Camera Tripod',
      price: 39.99,
      rating: 3,
      reviews: 123,
      image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Favorites</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="info">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <div className="rating">
                <span className="stars">
                  {[...Array(product.rating)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <i className="far fa-star" key={i}></i>
                  ))}
                </span>
                <span>({product.reviews})</span>
              </div>
              <button className="btn">Edit Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;

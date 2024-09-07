import React, { useState } from 'react';
import '../../App.css';
import '../styles/ProductStock.css';

const products = [
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Apple Watch Series 4',
    category: 'Digital Product',
    price: 690.00,
    piece: 63,
    colors: ['#000', '#ccc', '#f8c7c7'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Microsoft Headsquare',
    category: 'Digital Product',
    price: 190.00,
    piece: 13,
    colors: ['#000', '#f5c8c8', '#6ab0e3', '#f5d562'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Women\'s Dress',
    category: 'Fashion',
    price: 640.00,
    piece: 635,
    colors: ['#a56990', '#6ab0e3', '#000', '#4b70c4'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Samsung A50',
    category: 'Mobile',
    price: 400.00,
    piece: 67,
    colors: ['#4b70c4', '#000', '#c83a56'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Camera',
    category: 'Electronic',
    price: 420.00,
    piece: 52,
    colors: ['#4b70c4', '#000', '#c83a56'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Microsoft Headsquare',
    category: 'Digital Product',
    price: 190.00,
    piece: 13,
    colors: ['#000', '#f5c8c8', '#6ab0e3', '#f5d562'],
  },
  {
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/apple-watch/watchos-10-series-8-bluetooth-hero-wrap.png',
    name: 'Women\'s Dress',
    category: 'Fashion',
    price: 640.00,
    piece: 635,
    colors: ['#a56990', '#6ab0e3', '#000', '#4b70c4'],
  },
];

function ProductStock() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (index) => {
    // Handle delete logic here, e.g., remove from state or send a request to the server
    console.log(`Delete item at index: ${index}`);
  };

  return (
    <div className="container">
      <h1>Product Stock</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search product name" />
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Piece</th>
            <th>Available Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.piece}</td>
              <td>
                {product.colors.map((color, i) => (
                  <span key={i} style={{ backgroundColor: color, display: 'inline-block', width: '15px', height: '15px', marginRight: '5px' }}></span>
                ))}
              </td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>
          {currentPage} of {Math.ceil(products.length / itemsPerPage)}
        </span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ProductStock;

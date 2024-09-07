import React from 'react';
import '../../App.css';
import '../styles/Invoice.css';

const Invoice = () => {
  const invoiceData = [
    { serialNo: 1, description: 'Children Toy', quantity: 2, baseCost: 20, totalCost: 80 },
    { serialNo: 2, description: 'Makeup', quantity: 2, baseCost: 50, totalCost: 100 },
    { serialNo: 3, description: 'Asus Laptop', quantity: 5, baseCost: 100, totalCost: 500 },
    { serialNo: 4, description: 'Iphone X', quantity: 4, baseCost: 1000, totalCost: 4000 },
  ];

  const calculateTotal = () => {
    return invoiceData.reduce((total, item) => total + item.totalCost, 0);
  };

  return (
    <div className="invoice-container">
      <h1 className="invoice-title">Invoice</h1>
      <div className="invoice-info">
        <div>
          <strong>Invoice From:</strong>
          <p>Virginia Walker</p>
          <p>9694 Krajcik Locks Suite 635</p>
        </div>
        <div>
          <strong>Invoice To:</strong>
          <p>Austin Miller</p>
          <p>Brookview</p>
        </div>
        <div>
          <p><strong>Invoice Date:</strong> 12 Nov 2019</p>
          <p><strong>Due Date:</strong> 25 Dec 2019</p>
        </div>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Base Cost</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((item) => (
            <tr key={item.serialNo}>
              <td>{item.serialNo}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.baseCost.toFixed(2)}</td>
              <td>${item.totalCost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="invoice-total">
        <strong>Total = ${calculateTotal().toFixed(2)}</strong>
      </div>
      <button className="invoice-button">Send Invoice</button>
    </div>
  );
};

export default Invoice;

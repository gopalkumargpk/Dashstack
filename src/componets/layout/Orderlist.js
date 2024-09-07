import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../../App.css';
import '../styles/Orderlist.css';

const Orderlist = () => {
  const [startDate, setStartDate] = useState(null);

  const orders = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '345 Elm St', date: '15 Sep 2019', type: 'Water', status: 'Pending' },
    // Add more orders as needed
  ];

  // Optional: Filter orders based on the selected date
  const filteredOrders = startDate
    ? orders.filter(order => new Date(order.date).toDateString() === startDate.toDateString())
    : orders;

  return (
    <div className="order-list">
      <h1>Order List</h1>
      
      {/* Calendar Component */}
      <div className="calendar-container">
        <label htmlFor="date-picker">Select a Date:</label>
        <DatePicker
          id="date-picker"
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="dd MMM yyyy"
          placeholderText="Select a date"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.type}</td>
              <td className={
                order.status === 'Completed' ? 'status-completed' :
                order.status === 'Pending' ? 'status-pending' : ''
              }>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orderlist;

import React from 'react';

function OrderDetails({ order }) {
  return (
    <div className="order-details">
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Customer Name: {order.customerName}</p>
      <p>Order Date: {order.orderDate}</p>
      {/* Add more details here as needed */}
    </div>
  );
}

export default OrderDetails;

import React from 'react';

function OrderStatus({ status }) {
  return (
    <div className="order-status">
      <h2>Order Status</h2>
      <p>Status: {status}</p>
      {/* Add more status details here as needed */}
    </div>
  );
}

export default OrderStatus;

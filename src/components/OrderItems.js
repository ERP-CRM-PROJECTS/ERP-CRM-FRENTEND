import React from 'react';

function OrderItems({ items }) {
  return (
    <div className="order-items">
      <h2>Order Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
            {/* Add more item details here as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderItems;

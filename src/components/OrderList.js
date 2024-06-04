import React from 'react';
import { Link } from 'react-router-dom';
import './OrderList.css';

function OrderList({ orders }) {
  return (
    <div className="order-list">
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h2>Order ID: {order.id}</h2>
          <p>Status: {order.status}</p>
          <p>Placed on: {new Date(order.placedDate).toLocaleDateString()}</p>
          <p>Total: ${order.totalAmount.toFixed(2)}</p>
          <Link to={`/orders/${order.id}`} className="view-details-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default OrderList;

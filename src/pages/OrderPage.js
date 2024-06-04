import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../services/orderService';
import OrderDetails from '../components/OrderDetails';
import OrderItems from '../components/OrderItems';
import OrderStatus from '../components/OrderStatus';

function OrderPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOrderById(orderId)
      .then(response => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="order-page">
      {order && (
        <>
          <OrderDetails order={order} />
          <OrderItems items={order.items} />
          <OrderStatus status={order.status} />
          {/* Add more components or details here as needed */}
        </>
      )}
    </div>
  );
}

export default OrderPage;

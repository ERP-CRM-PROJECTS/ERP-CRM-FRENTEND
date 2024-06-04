import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../services/orderService';
import OrderList from '../components/OrderList';
import './HomePages.css';
import logo from '../assets/images/logo.svg'; // Import the image

function HomePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllOrders()
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

  return (
    <div className="home-page">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Welcome to the Order Management System</h1>
      <OrderList orders={orders} />
    </div>
  );
}

export default HomePage;

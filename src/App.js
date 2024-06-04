import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Order Management System</h1>
        </div>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/profile">Profile</a>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePages />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <div className="footer">
          <p>&copy; 2024 Order Management System. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;

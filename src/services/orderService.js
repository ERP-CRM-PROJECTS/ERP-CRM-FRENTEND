import axios from 'axios';

const API_BASE_URL = 'http://example.com/api'; // Replace with your API base URL

// Function to fetch all orders
export const getAllOrders = () => {
  return axios.get(`${API_BASE_URL}/orders`);
};

// Function to fetch an order by ID
export const getOrderById = (orderId) => {
  return axios.get(`${API_BASE_URL}/orders/${orderId}`);
};

// Function to create a new order
export const createOrder = (orderData) => {
  return axios.post(`${API_BASE_URL}/orders`, orderData);
};

// Function to update an existing order
export const updateOrder = (orderId, orderData) => {
  return axios.put(`${API_BASE_URL}/orders/${orderId}`, orderData);
};

// Function to delete an order
export const deleteOrder = (orderId) => {
  return axios.delete(`${API_BASE_URL}/orders/${orderId}`);
};

// Add more functions as needed for your order management system

import axios from 'axios';

const baseURL = 'https://dummyjson.com';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  body: ((data)=>JSON.stringify(data))
});

// Create a new axios instance with the authorization header
const authApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('user.token')}`
  },
  body: (data) => JSON.stringify(data)
});


//For Products
export const getProducts = () => api.get('/products');
export const getProductById = (productId) => api.get(`/products/${productId}`);
export const getProductsByLimit = (limit) => api.get(`/products?limit=${limit}`);
export const getProductsBySort = (sort) => api.get(`/products?sort=${sort}`);

//For Categories 
export const getCategories = () => api.get('/products/categories');
export const getProductsByCategory = (category) => api.get(`/products/category/${category}`);


//For User
export const loginUser = (credentials) => api.post('/auth/login', credentials);

// Fetch user profile
export const fetchUserProfile = (userId) => authApi.get(`/users/${userId}`);

// Fetch user orders
export const fetchUserCart = (userId) => authApi.get(`/users/${userId}/carts`);




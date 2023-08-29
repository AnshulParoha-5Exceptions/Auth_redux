import React, { useState, useEffect } from 'react';
import '../assets/styles/ProductListing.css';
import { getProducts } from '../api/services';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Dispatch the addItem action with the selected product
    dispatch(addItem(product));
    
  };

  return (
    <div className="product-listing-container">
      <h2 className="product-listing-heading">Product Listing</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-category">Category: {product.category}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)} // Disable if the product is already in the cart
              >
                {cartItems.some(item => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

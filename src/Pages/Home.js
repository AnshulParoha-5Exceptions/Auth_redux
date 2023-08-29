import React, { useState, useEffect } from 'react';
import ProductListing from '../components/ProductListing';
import '../assets/styles/home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false when data is loaded
    }, 1000); // Simulating a 2-second delay
  }, []);

  return (
    <div className='hero'>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <ProductListing /> // Render the ProductListing component when not loading
      )}
    </div>
  );
};

export default Home;

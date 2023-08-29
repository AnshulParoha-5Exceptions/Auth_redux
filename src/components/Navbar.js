import React from 'react';
import '../assets/styles/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  const handleLogout = () => {
    dispatch(logout());
    alert('Logged Out...');
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
  };

  return (

    <nav>
      <div>
        <ul style={{ marginLeft: 'auto', textAlign: 'center', padding: 0 }}>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to="/counter" style={linkStyle}>
              Counter
            </NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to="/todo" style={linkStyle}>
              To-Do App
            </NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to="/dashboard" style={linkStyle}>
              Profile
            </NavLink>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <span>Cart : {cartCount}</span>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink to="/cart" style={linkStyle}>
              Cart
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li style={{ display: 'inline-block', margin: '0 10px' }}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li style={{ display: 'inline-block', margin: '0 10px' }}>
              <NavLink to="/login" style={linkStyle}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;

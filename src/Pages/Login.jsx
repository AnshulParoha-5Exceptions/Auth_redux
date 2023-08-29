import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../api/services';
import { login } from '../redux/slices/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPwd, setShowPswd] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading animation


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordShow = () => {
    setShowPswd(!showPwd);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation


    try {
      const response = await loginUser(formData);
      dispatch(login(response.data));
      setLoading(false); // Hide loading animation
      alert('Logged In Successfully!!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.response.data.message)
      setLoading(false); // Hide loading animation
      setFormData({
        username: '',
        password: ''
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4 className="mt-4">Login</h4>
          <form onSubmit={handleLogin} className="mt-3">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type={showPwd ? 'text' : 'password'}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="form-check-input"
                  checked={showPwd}
                  onChange={togglePasswordShow}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  Show Password
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearAll } from '../redux/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCartItemRemove = (product) => {
    dispatch(removeItem(product.id));
  };
  // const handleClearCart = () => {
  //   dispatch(clearAll())
  // }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.images[0]} alt={item.title} style={{ maxWidth: '50px' }} />
                </td>
                <td>{item.title}</td>
                <td>Rs. {item.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleCartItemRemove(item)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Your cart is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
      {cartItems.length > 0 && (
        <div className="text-right mt-4">
          <h4>Total: Rs. {calculateTotal()}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;

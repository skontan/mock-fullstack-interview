import React from 'react';

const Cart = ({ cart }) => {
  const totalAmount = 0;

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        // Render cart items here instead of null
        null
      )}
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;

import React from 'react';
import Layout from './common/Layout';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Layout>
      <div className="cart-page-container container py-5">
        <h1 className="cart-page-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart-container text-center">
            <i className="fas fa-shopping-cart empty-cart-icon"></i>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div className="cart-item" key={`${item.id}-${item.size}-${item.color}`}>
                    <div className="cart-item-image">
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h5 className="item-name">{item.name}</h5>
                      <p className="item-meta">
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && ' | '}
                        {item.color && `Color: ${item.color}`}
                      </p>
                      <p className="item-price">{item.price}</p>
                    </div>
                    <div className="cart-item-quantity">
                      <div className="quantity-selector">
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <div className="cart-item-total">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>
                    <div className="cart-item-remove">
                      <button onClick={() => removeFromCart(item.id, item.size, item.color)}>&times;</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="order-summary-card">
                <h4 className="summary-title">Order Summary</h4>
                <div className="summary-item">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './common/Layout';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      items: cartItems,
      total: cartTotal,
      orderNumber: Math.floor(Math.random() * 1000000),
    };
    clearCart();
    navigate('/order-confirmation', { state: { order: orderDetails } });
  };

  if (cartItems.length === 0) {
    return (
        <Layout>
            <div className="container text-center py-5">
                <h2>Your cart is empty.</h2>
                <p>You can't proceed to checkout without any items.</p>
                <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
            </div>
        </Layout>
    );
  }

  return (
    <Layout>
      <div className="checkout-container container py-5">
        <div className="row">
          {/* Checkout Form */}
          <div className="col-lg-7">
            <div className="checkout-form">
              <h3 className="section-header">Contact Information</h3>
              <form onSubmit={handlePlaceOrder}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>

                <h3 className="section-header mt-5">Shipping Address</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country" required>
                      <option>United States</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" required>
                      <option>California</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" required />
                  </div>
                </div>

                <h3 className="section-header mt-5">Payment Method</h3>
                <div className="payment-method-options">
                  <div className="payment-option">
                    <input 
                      type="radio" 
                      id="credit-card" 
                      name="paymentMethod" 
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="credit-card">
                      <i className="fas fa-credit-card"></i>
                      <span>Credit Card</span>
                    </label>
                  </div>
                  <div className="payment-option">
                    <input 
                      type="radio" 
                      id="paypal" 
                      name="paymentMethod" 
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="paypal">
                      <i className="fab fa-paypal"></i>
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>

                {paymentMethod === 'credit-card' && (
                  <div className="credit-card-form mt-4">
                    <h4 className="payment-details-header">Payment Details</h4>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" required />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="paypal-info text-center mt-4 p-3 bg-light rounded">
                    <p className="mb-0">After clicking "Place Order", you will be redirected to PayPal to complete your purchase securely.</p>
                  </div>
                )}

                <hr className="my-4" />
                <button className="btn btn-primary btn-lg w-100" type="submit">Place Order</button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5">
            <div className="order-summary-card checkout-summary">
              <h4 className="summary-title">Your Order</h4>
              <div className="checkout-items-list">
                {cartItems.map(item => (
                  <div className="checkout-item" key={item.id}>
                    <img src={item.imageUrl} alt={item.name} className="checkout-item-image" />
                    <div className="checkout-item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">Qty: {item.quantity}</span>
                    </div>
                    <span className="checkout-item-price">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
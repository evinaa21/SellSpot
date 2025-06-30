import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from './common/Layout';

const OrderConfirmation = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2>No order details found.</h2>
          <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="order-confirmation-container container py-5">
        <div className="confirmation-box">
          <div className="confirmation-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h1 className="confirmation-title">Thank you for your order!</h1>
          <p className="confirmation-subtitle">Your order #{order.orderNumber} has been placed successfully.</p>
          
          <div className="order-summary-card confirmation-summary">
            <h4 className="summary-title">Order Summary</h4>
            {order.items.map(item => (
              <div className="checkout-item" key={item.id}>
                <img src={item.imageUrl} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="checkout-item-price">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-total">
              <span>Total Paid</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/shop" className="btn btn-primary mt-4">Continue Shopping</Link>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
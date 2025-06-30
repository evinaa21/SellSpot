import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title brand-logo">
              <span className="brand-text">SellSpot</span>
              <span className="brand-dot">.</span>
            </h5>
            <p className="footer-text">Your one-stop shop for the latest trends in fashion. Discover quality and style at unbeatable prices.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Account</h5>
            <ul className="footer-links">
              <li><a href="/profile">My Account</a></li>
              <li><a href="/orders">Order History</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/returns">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Stay Updated</h5>
            <p className="footer-text">Subscribe to our newsletter to get the latest updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SellSpot. All Rights Reserved.</p>
          <div className="payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-amex"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
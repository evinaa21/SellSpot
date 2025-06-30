import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Brand Logo */}
        <a className="navbar-brand brand-logo" href="/">
          <span className="brand-text">SellSpot</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Mobile Toggle */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Navigation */}
          <ul className="navbar-nav mx-auto d-flex align-items-center">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link-custom d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Men's
              </a>
              <ul className="dropdown-menu dropdown-menu-custom">
                <li><a className="dropdown-item" href="#">Clothing</a></li>
                <li><a className="dropdown-item" href="#">Shoes</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link-custom d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Women's
              </a>
              <ul className="dropdown-menu dropdown-menu-custom">
                <li><a className="dropdown-item" href="#">Dresses</a></li>
                <li><a className="dropdown-item" href="#">Tops</a></li>
                <li><a className="dropdown-item" href="#">Shoes</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link-custom d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Kids
              </a>
              <ul className="dropdown-menu dropdown-menu-custom">
                <li><a className="dropdown-item" href="#">Boys</a></li>
                <li><a className="dropdown-item" href="#">Girls</a></li>
                <li><a className="dropdown-item" href="#">Baby</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom sale-link d-flex align-items-center" href="/shop">
                Sale
                <span className="sale-badge">Hot</span>
              </a>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="navbar-nav d-flex align-items-center">
            <a className="nav-link nav-icon d-flex align-items-center justify-content-center" href="#" title="Search">
              <i className="fas fa-search"></i>
            </a>
            <a className="nav-link nav-icon d-flex align-items-center justify-content-center" href="#" title="Account">
              <i className="fas fa-user"></i>
            </a>
            <a className="nav-link nav-icon d-flex align-items-center justify-content-center position-relative" href="#" title="Cart">
              <i className="fas fa-shopping-bag"></i>
              <span className="cart-badge">3</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
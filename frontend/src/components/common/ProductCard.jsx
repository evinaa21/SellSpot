import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card h-100">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image position-relative">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
          <div className="product-actions">
            <span className="action-btn" title="Add to Wishlist"><i className="far fa-heart"></i></span>
            <span className="action-btn" title="Quick View"><i className="fas fa-search"></i></span>
            <span className="action-btn" title="Add to Cart"><i className="fas fa-shopping-bag"></i></span>
          </div>
          {product.isNew && <span className="product-badge">New</span>}
        </div>
      </Link>
      <div className="product-info">
        <p className="product-category">{product.mainCategory}</p>
        <h5 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
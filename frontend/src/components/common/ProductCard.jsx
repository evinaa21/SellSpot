import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card h-100">
      <div className="product-image position-relative">
        <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        <div className="product-actions">
          <a href="#" className="action-btn" title="Add to Wishlist"><i className="far fa-heart"></i></a>
          <a href="#" className="action-btn" title="Quick View"><i className="fas fa-search"></i></a>
          <a href="#" className="action-btn" title="Add to Cart"><i className="fas fa-shopping-bag"></i></a>
        </div>
        {product.isNew && <span className="new-badge">New</span>}
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h5 className="product-name">{product.name}</h5>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
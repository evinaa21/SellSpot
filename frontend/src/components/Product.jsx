import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './common/Layout';
import { allProductsData } from '../data/products';
import ProductCard from './common/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = allProductsData.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [activeImage, setActiveImage] = useState(product?.imageUrl);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Reset state when product ID changes
    window.scrollTo(0, 0);
    setActiveImage(product?.imageUrl);
    setIsAdded(false);
    setQuantity(1);
  }, [id, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) {
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2>Product Not Found</h2>
          <p>Sorry, the product you are looking for does not exist.</p>
          <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = allProductsData.filter(
    p => p.mainCategory === product.mainCategory && p.id !== product.id
  ).slice(0, 8); // Get up to 8 related products

  const formatText = (text) => text ? text.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';

  return (
    <Layout>
      <div className="product-page-container container py-5">
        {/* Breadcrumbs */}
        <nav aria-label='breadcrumb' className='mb-4'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
            <li className='breadcrumb-item'><Link to='/shop'>Shop</Link></li>
            <li className='breadcrumb-item'><Link to={`/shop/${product.mainCategory}`}>{formatText(product.mainCategory)}</Link></li>
            <li className='breadcrumb-item active' aria-current='page'>{product.name}</li>
          </ol>
        </nav>

        <div className="row">
          {/* Product Image Gallery */}
          <div className="col-lg-4">
            <div className="product-gallery">
              <div className="main-image-container">
                <img src={activeImage} alt={product.name} className="main-product-image" />
              </div>
              {product.imageUrls && product.imageUrls.length > 1 && (
                <div className="thumbnail-container">
                  {product.imageUrls.map((url, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail-item ${url === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(url)}
                    >
                      <img src={url} alt={`${product.name} thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-7">
            <div className="product-details">
              <h1 className="product-title">{product.name}</h1>
              <div className="d-flex justify-content-between align-items-center">
                <p className="product-price-lg">{product.price}</p>
                <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                </span>
              </div>
              <p className="product-description">{product.description}</p>

              {/* Size Options */}
              {product.sizes && (
                <div className="product-options">
                  <h5 className="option-title">Size</h5>
                  <div className="option-buttons">
                    {product.sizes.map(size => (
                      <button 
                        key={size} 
                        className={`btn-option ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Options */}
              {product.colors && (
                <div className="product-options">
                  <h5 className="option-title">Color</h5>
                  <div className="option-buttons">
                    {product.colors.map(color => (
                      <button 
                        key={color} 
                        className={`btn-option ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="d-flex align-items-center my-4">
                <div className="quantity-selector me-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
                <button 
                  className={`btn btn-primary btn-lg flex-grow-1 btn-add-to-cart ${isAdded ? 'added' : ''}`}
                  onClick={handleAddToCart}
                  disabled={product.stock === 0 || isAdded}
                >
                  {product.stock === 0 ? 'Out of Stock' : (isAdded ? 'Added!' : 'Add to Cart')}
                </button>
              </div>

              {/* Details Accordion */}
              <div className="accordion product-info-accordion" id="productInfoAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Product Details
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#productInfoAccordion">
                    <div className="accordion-body">
                      Made from high-quality materials. Care instructions: Machine wash cold, tumble dry low.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Shipping & Returns
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#productInfoAccordion">
                    <div className="accordion-body">
                      Free shipping on orders over $50. Easy 30-day returns.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section mt-5 pt-5 border-top">
            <h2 className="section-title text-center mb-5">You Might Also Like</h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="product-carousel"
            >
              {relatedProducts.map((p) => (
                <SwiperSlide key={p.id}>
                  <ProductCard product={p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Product;
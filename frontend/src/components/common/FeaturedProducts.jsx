import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import the featured products data
import { featuredProductsData } from '../../data/products';

const FeaturedProducts = () => {
  return (
    <section className="featured-products-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Featured Products</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="product-carousel"
        >
          {featuredProductsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.name} />
                  {product.isNew && <span className="product-badge">New</span>}
                  <div className="product-actions">
                    <a href="#" className="action-btn"><i className="fas fa-shopping-bag"></i></a>
                    <a href="#" className="action-btn"><i className="fas fa-heart"></i></a>
                    <a href="#" className="action-btn"><i className="fas fa-search"></i></a>
                  </div>
                </div>
                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h5 className="product-name">{product.name}</h5>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
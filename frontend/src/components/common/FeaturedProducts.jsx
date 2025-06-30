import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import the featured products data and the ProductCard component
import { featuredProductsData } from '../../data/products';
import ProductCard from './ProductCard';

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
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
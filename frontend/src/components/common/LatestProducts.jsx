import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import the new data and the ProductCard component
import { latestProductsData } from '../../data/products';
import ProductCard from './ProductCard';

const LatestProducts = () => {
  return (
    <section className="new-arrivals-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">New Arrivals</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: { slidesPerView: 1, spaceBetween: 10 },
            // when window width is >= 480px
            480: { slidesPerView: 2, spaceBetween: 20 },
            // when window width is >= 768px
            768: { slidesPerView: 3, spaceBetween: 30 },
            // when window width is >= 1024px
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="product-carousel"
        >
          {latestProductsData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestProducts;
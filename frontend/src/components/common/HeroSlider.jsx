import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1200}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="slider-item slider-bg-1">
          <div className="slider-content">
            <h1 className="slider-title">Summer Collection</h1>
            <p className="slider-subtitle">Discover the latest trends for this season.</p>
            <a href="/shop" className="btn btn-primary">Shop Now</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item slider-bg-2">
          <div className="slider-content">
            <h1 className="slider-title">Up to 50% Off</h1>
            <p className="slider-subtitle">On selected men's and women's fashion.</p>
            <a href="/shop" className="btn btn-primary">Explore Deals</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-item slider-bg-3">
          <div className="slider-content">
            <h1 className="slider-title">New Arrivals</h1>
            <p className="slider-subtitle">Fresh looks for every occasion.</p>
            <a href="/shop" className="btn btn-primary">View Collection</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
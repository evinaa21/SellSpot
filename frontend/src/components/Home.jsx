import React from 'react';
// 1. Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
// Import EffectFade module
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import LatestProducts from './common/LatestProducts'; // Import the new component
import FeaturedProducts from './common/FeaturedProducts'; // Import the featured products component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Fade Effect styles
import 'swiper/css/effect-fade';

const Home = () => {
  return (
    <div>
        {/* Promotional Bar */}
        <div className='promo-bar'>
          <div className='container'>
            <div className='promo-content'>
              <span className='promo-text'>🚚 Free Worldwide Shipping on Orders Over $50 | 🔥 Summer Sale: Up to 70% Off!</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
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

        {/* Hero Slider Section */}
        <section className="hero-slider">
            <Swiper
                // 2. Add EffectFade to modules
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade" // Set the effect to fade
                fadeEffect={{
                  crossFade: true // Enable cross-fade for a smoother transition
                }}
                speed={1200} // Increase transition duration for a smoother effect
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000, // Slightly increase delay to appreciate the fade
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

        {/* New Arrivals Section is now cleanly handled by its own component */}
        <LatestProducts />

        {/* Featured Products Section */}
        <FeaturedProducts />
    </div>
  )
}

export default Home;
import React from 'react';
import LatestProducts from './common/LatestProducts';
import FeaturedProducts from './common/FeaturedProducts';
import HeroSlider from './common/HeroSlider';
import Layout from './common/Layout';

const Home = () => {
  return (
    <Layout>
        {/* Hero Slider Section */}
        <HeroSlider />

        {/* New Arrivals Section */}
        <LatestProducts />

        {/* Featured Products Section */}
        <FeaturedProducts />
    </Layout>
  )
}

export default Home;
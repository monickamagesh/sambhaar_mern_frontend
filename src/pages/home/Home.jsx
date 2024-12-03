import React, { useEffect } from 'react'
import HeroSection from '../../components/home/HeroSection'
import DealsSection from '../../components/home/DealsSection'
import PromoBanner from '../../components/home/PromoBanner'
import Products from '../../components/shop/Products'
import PromotionSlider from '../../components/home/PromotionalBanner'
import Categories from '../../components/home/Categories'

const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div >
        <HeroSection />
        <Categories />
        <PromotionSlider />
        {/* <Trending /> */}
        <Products />
        <DealsSection />
        <PromoBanner />
    </div>
  )
}

export default Home
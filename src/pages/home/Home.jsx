import React, { useEffect } from 'react'
import HeroSection from '../../components/home/HeroSection'
import DealsSection from '../../components/home/DealsSection'
import PromoBanner from '../../components/home/PromoBanner'
import Footer from '../../components/Footer'
import Products from '../../components/shop/Products'
import PromotionSlider from '../../components/home/PromotionalBanner'

const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div >
        <HeroSection />
        <Categories />
        <PromotionSlider />
        <Products />
        <DealsSection />
        <PromoBanner />
        <Footer />
    </div>
  )
}

export default Home
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
<<<<<<< HEAD
=======
        {/* <Trending /> */}
>>>>>>> e11e4eed60c8b9b8b057ff53841d4f8dbe43948c
        <Products />
        <DealsSection />
        <PromoBanner />
        <Footer />
    </div>
  )
}

export default Home
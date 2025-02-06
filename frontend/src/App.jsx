import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import FeaturedItems from './components/FeaturedItems/FeaturedItems'
import OurFeatures from './components/OurFeatures/OurFeatures'
import FinestSelection from './components/FinestSelection/FinestSelection'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedItems/>
      <OurFeatures/>
      <FinestSelection/>
      <Footer/>
    </>
  )
}

export default App

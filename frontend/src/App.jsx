import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import FeaturedItems from './components/FeaturedItems/FeaturedItems'
import OurFeatures from './components/OurFeatures/OurFeatures'
import FinestSelection from './components/FinestSelection/FinestSelection'
import Footer from './components/Footer/Footer'
import OfferCardDisplay from './components/OfferCardDisplay/OfferCardDisplay'
import Reviews from './components/Review/Reviews'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function HomePage() {
  return (
    <>
      <Hero />
      <OfferCardDisplay />
      <FeaturedItems />
      <OurFeatures />
      <FinestSelection />
      <Reviews />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App

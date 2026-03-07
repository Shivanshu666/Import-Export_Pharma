import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CertStrip from './Components/CertStrip'
import Services from './Components/Services';
import Market from './Components/Market';
import WhyUs from './Components/WhyUs';
import CtaBanner from './Components/CtaBanner';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Product"



const App = () => {
  return (
    <>
     <Navbar/> 
     <main>
      <Hero/>
      <CertStrip/>
      <Services/>
      <Market/>
      <WhyUs/>
      <AboutUs/>
      <Products/>
      <CtaBanner/>
     </main>
     <Footer/>
     
    </>
  )
}

export default App

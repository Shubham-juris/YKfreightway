import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Sitemaintenance from './Components/Page/page';
import ContactUs from './Components/ContactUS/ContactUs';




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactUs/>
      <Footer />
      <Sitemaintenance/>
      </>
  );
}

export default App;


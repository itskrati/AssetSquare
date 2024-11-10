import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1c2e]">
      <Navbar />
      <Hero />
      <Features />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default App;
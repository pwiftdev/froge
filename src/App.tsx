import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import XCommunity from './components/XCommunity';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import FloatingLogos from './components/FloatingLogos';
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingLogos />
      <Navbar />
      <main>
        <Hero />
        <XCommunity />
        <About />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
}

export default App;

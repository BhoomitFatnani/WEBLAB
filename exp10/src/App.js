import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
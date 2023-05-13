import { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products/:category' element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

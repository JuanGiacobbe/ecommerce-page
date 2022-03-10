import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './pages/home-page/Home';
import Products from './pages/products/Products';
import About from './pages/about/About';
import Colections from './pages/colections/Colections';
import Contact from './pages/contact/Contact';
import Landing from './pages/landing/Landing';
import NotFound from './pages/not-found/NotFound';



function App() {
  return (
    <main className='main'>
    <BrowserRouter>
      <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/colections" element={<Colections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account-register" element={<Landing />} />
          <Route path="/*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;

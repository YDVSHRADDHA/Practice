import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>       

<Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

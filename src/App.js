import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Features from './Pages/Features';
import Home from './Pages/Home';
import Navigation from './components/Navigation';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './components/Footer';
import Pricing from './Pages/Pricing';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Calendar from './Pages/Calendar';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(top > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  let isDashboard = location.pathname === "/dashboard";

  return (
    <div className="App">
      <header>
        <BrowserRouter>
        {!isDashboard && <Navigation /> }
            <Routes>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/pricing" element={<Pricing/>} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/categories" element={<Categories />} />
                <Route path="/signup" element={<SignUp />} /> */}
                {/* <Route path="/product/:productId" element={<Product/>} /> */}
            </Routes>
        </BrowserRouter>
      </header>

      {/* <div style={{position: "absolute", top: "0", right: "0", zIndex: "-999"}}>
        <Background />
      </div> */}

      
      {!isDashboard && <Footer /> }


      
    </div>
  );
}

export default App;

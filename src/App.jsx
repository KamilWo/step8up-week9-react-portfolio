import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

// --- Main App Component ---
const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default App;

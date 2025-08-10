import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css'
import '../App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/CustomSwiper.css';

export const metadata = {
  title: 'React portfolio - Kamil Wozniak',
  description: 'React portfolio - Kamil Wozniak',
  metadataBase: new URL('https://step8up-week9-react-portfolio.vercel.app/'),
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

import React from 'react';
import './App.css';
import "../node_modules/@fortawesome/react-fontawesome/index"

import Banner from './pages/Banner';
import Footer from './pages/Footer';
import Header from './pages/Header';
import ServiceSection from './pages/ServiceSection';
import WorkSection from './pages/WorkSection';

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Banner/>
      <WorkSection/>
      <ServiceSection/>
      <Footer/>
    </div>
  );
}
export default App;

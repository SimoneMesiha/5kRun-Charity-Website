import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    // flex-col creates a flex container with column direction
    // min-h-screen ensures the container is at least the height of the viewport
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* flex-grow allows the outlet container to grow and fill the space */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
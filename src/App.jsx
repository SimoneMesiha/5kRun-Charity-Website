import React from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import RegistrationPage from './pages/Registration';
import GalleryPage from './pages/Gallery';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact'element={<Contact/>}/>
          <Route path="/registration"element={<RegistrationPage/>}/>
          <Route path="/gallery"element={<GalleryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
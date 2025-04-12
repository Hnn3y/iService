import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/mainlayout/MainLayout';
import Home from './pages/homepage/Home';
import About from './pages/about/About';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import { Button } from '@shadcn/ui';
// import { Button } from "@shadcn/ui"





function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      
      </Route>
    </Routes>
  )
}

export default App

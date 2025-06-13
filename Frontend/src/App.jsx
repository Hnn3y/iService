import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import AuthLayout from './layouts/authlayout/AuthLayout';
import MainLayout from './layouts/mainlayout/MainLayout';
import Home from './pages/homepage/Home';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ContinueSetup from './pages/auth/popup-signup/Popup';
import FinishAccountSetup from './pages/auth/finish-acc-setup/FinishAccountSetup';
import ProfilePreview from './pages/auth/profile-preview/ProfilePreview'
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import AccountSetup from './pages/auth/setup-account/AccountSetup';
import AuthHome from './pages/auth/authhome/AuthHome';

// import { Button } from '@shadcn/ui';
// import { Button } from "@shadcn/ui"





function App() {

  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="authhome" element={<AuthHome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="continue-setup" element={<ContinueSetup />} />
        <Route path="accountsetup" element={<AccountSetup />} />
        <Route path="finishaccountsetup" element={<FinishAccountSetup />} />
        <Route path="profilepreview" element={<ProfilePreview />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App

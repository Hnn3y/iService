import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import AuthLayout from './layouts/authlayout/AuthLayout';
import MainLayout from './layouts/mainlayout/MainLayout';

import UserTrueLayout from './layouts/usertruelayout/UserTrueLayout';
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
import Cart from './pages/cart/Cart';
import PaymentInfo from './pages/cart/PaymentInfo';
import PaymentSuccessPopup from './pages/cart/PaymentSuccessPopup';

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
      <Route path="/usertrue" element={<UserTrueLayout />}>
        <Route path="cart" element={<Cart />} />
        <Route path="paymentinfo" element={<PaymentInfo />} />
        <Route path="paymentsuccesspopup" element={<PaymentSuccessPopup />} />
      </Route>
    </Routes>
  );
}

export default App
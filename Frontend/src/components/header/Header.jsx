import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full shadow-md sticky top-0 bg-white z-50 ${styles.header}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          iService
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/auth/login" className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
            Login
          </Link>
          <Link to="/auth/signup" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </div>

        {/* Hamburger for Mobile */}
       <button
  className={`md:hidden text-3xl font-bold transition-transform duration-200  ${
    mobileMenuOpen ? "text-blue-600 rotate-90" : "text-blue-700"
  }`}
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  {mobileMenuOpen ? "×" : "☰"}
</button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t text-gray-700">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/auth/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link to="/auth/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`w-full py-6 mt-auto bg-gray-100 ${styles.footer}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        
        {/* Left - Brand or Description */}
        <div>
          <p>&copy; {new Date().getFullYear()} iService. All rights reserved.</p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
        </div>

        {/* Right - Socials or Actions */}
        <div className="flex gap-3">
          <a href="#" className="hover:text-blue-600">Twitter</a>
          <a href="#" className="hover:text-blue-600">Instagram</a>
          <a href="#" className="hover:text-blue-600">Facebook</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

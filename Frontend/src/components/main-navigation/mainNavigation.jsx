import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBookOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
// import {}
import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    navigate(path);
  };
  return (
    <nav
      className="main-nav"
      aria-label="Main navigation"
      className={`w-full ${styles.mainNavigation}`}
    >
      <ul className="w-full flex justify-between">
        <li onClick={() => handleNavClick("/")}>
          <span>{<FontAwesomeIcon icon={faHome} className="w-[.8rem]" />}</span>
          <span >Home</span>
        </li>
        <li onClick={() => handleNavClick("/usertrue/booking")}>
          <span>
            {<FontAwesomeIcon icon={faBookOpen} className="w-[.8rem]" />}
          </span>
          <span>Booking</span>
        </li>
        <li onClick={() => handleNavClick("/usertrue/cart")}>
          <span>
            {<FontAwesomeIcon icon={faCartShopping} className="w-[.8rem]" />}
          </span>
          <span>Cart</span>
        </li>
        <li onClick={() => handleNavClick("/usertrue/profile")}>
          <span>{<FontAwesomeIcon icon={faUser} className="w-[.8rem]" />}</span>
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

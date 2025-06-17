import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faBookOpen, faHome } from "@fortawesome/free-solid-svg-icons";
// import {}
import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <nav className="main-nav" aria-label="Main navigation" className={`w-full ${styles.mainNavigation}`}>
      <ul className="w-full flex justify-between">
        <li>
            <span>{<FontAwesomeIcon icon={faHome} className="w-[.8rem]"/>}</span>
          <a href="/home">Home</a>
        </li>
        <li>
        <span>{<FontAwesomeIcon icon={faBookOpen} className="w-[.8rem]" />}</span>
          <a href="/cart">Booking</a>
        </li>
        <li>
        <span>{<FontAwesomeIcon icon={faCartShopping} className="w-[.8rem]" />}</span>
          <a href="/booking">Cart</a>
        </li>
        <li>
        <span>{<FontAwesomeIcon icon={faUser} className="w-[.8rem]" />}</span>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
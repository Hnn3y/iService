import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => { 

    const { pathname } = useLocation();

    const navItems = [ 
        { to: "/", label: "Home", icon: faHome},
        { to: "/bookng", label: "Booking", icon:faBook},
        { to: "/cart", label: "Cart", icon: faShoppingCart},
        { to: "/profile", label: "Profile", icon:faUser},

    ];

    return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md py-2 px-4 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs ${
            pathname === item.to ? "text-blue-600 border-t-2 border-blue-60" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl mb-1" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
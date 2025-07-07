import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => { 

    const { pathname } = useLocation();

    return(

        <nav className="flex justify-around items-center bg-white shadow-md py-3 border-t">

            <NavLink to="/" className="flex flex-col items-center text-xs">
            <FontAwesomeIcon Icon={faHome} />
            Home 
            </NavLink>
            <NavLink to="/booking" className="flex flax-col items-center text-xs">
            <FontAwesomeIcon icon={faBook} />
            Booking
            </NavLink>
            <NavLink to="/cart" className="flex flex-col items-center text-xs">
            <FontAwesomeIcon icon={faShoppingCart} />
                Cart
            </NavLink>

            <NavLink to="/profile" className="flex flex-col items-center text-xs">
            <FontAwesomeIcon icon={faUser} />
                Profile 
            </NavLink>

            
        </nav>
    );



};

export default BottomNav;
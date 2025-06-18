
import { Link } from "react-router-dom";
import styles from "./auth-home.module.css";
import logo from "../../../assets/logo.png";


const AuthHome = () => {

  return (
    <div

      className={`w-full h-screen max-w-[20rem] bg-[#fff] text-[#000] px-5 py-8 flex flex-col items-center gap-10  ${styles.authHome}`}
    >
      <h4 className="font-bold">Hub For Services</h4>
      <img src={logo} alt="" className="w-20 h-20" />

      <div className="form-content w-full flex flex-col gap-8">
        <div className="details flex flex-col gap-2">
          <h2 className="text-lg font-bold">Search, Hire, Stay Ahead</h2>
          <p className="text-sm text-gray-500">
            Your centralized hub for hiring services, work updates, and seamless
            productivity
          </p>
        </div>
        <div className="btn-box flex flex-col gap-4">
          <Link to="/auth/login"  className="w-full h-[2.5rem] bg-[#044BDA] text-[#fff] text-lg font-semibold flex justify-center items-center rounded-3xl">
            Log in
          </Link>
          <Link to="/auth/signup"  className="w-full h-[2.5rem] text-[#044BDA] text-lg font-semibold flex justify-center items-center border border-[#044BDA] rounded-3xl">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;

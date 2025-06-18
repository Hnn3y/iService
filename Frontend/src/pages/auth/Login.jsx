import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [showInput, setShowInput] = useState(false);

    let inputType = "password";
    const handleInputType = (e) => {
        e.preventDefault();
        setShowInput(prev => !prev);
    }
    if(showInput == true) {
        inputType = "text";
    }

  return (
    <form
      action=""
      className={`w-full max-w-[20rem] bg-[#fff] text-[#000] px-5 py-8 flex flex-col items-center gap-4  ${styles.login}`}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt="" className="w-20 h-20" />

        <h2 className="text-2xl">Welcome Back 😊</h2>
        <p className="max-w-[95%] text-[#737373] text-xs">
          Let’s pick up right where you left off and make today productive.
        </p>
      </div>

      <div className="form-content w-full flex flex-col gap-4">
        <div className={`email-box w-full flex flex-col items-start gap-2`}>
          <label>
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[2.5rem] border rounded-3xl"
          />
          <span className="text-xs">Use your company email</span>
        </div>

        <div className="password-box flex flex-col items-start gap-2 relative">
          <label>
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type={inputType}
            placeholder="********"
            className="w-full h-[2.5rem] border rounded-3xl "
          />
          <button
            onClick={handleInputType}
            className="h-[2.5rem] w-[3rem] absolute top-8 right-0 border border-[#bbbbbb] rounded-r-3xl cursor-pointer"
          >
            {showInput ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
      </div>
      <div className="form-base w-full flex justify-between">
        <div className="remember-me flex items-center gap-2 relative">
          <input type="checkbox" className="w-4 h-4 z-10 cursor-pointer" />
          <p>Remember me</p>
          <span className="copy-checkbox w-4 h-4 flex justify-center items-center top-[50%] translate-y-[-50%] absolute border border-blue-600 rounded-sm">
            {<FontAwesomeIcon icon={faCheck} className="text-xs text-[#fff]" />}
          </span>
        </div>
        <div className="forget-password">
          <Link to="/">Forgot Password</Link>
        </div>
      </div>

      <button className="w-full h-[2.5rem] bg-[#044BDA] text-[#fff] text-lg font-semibold flex justify-center items-center rounded-3xl">
        Log in
      </button>
      <p>
        Don't have an account? <Link to="/auth/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;

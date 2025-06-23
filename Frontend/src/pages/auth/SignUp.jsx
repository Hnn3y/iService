import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import styles from "./signUp.module.css";

const SignUp = () => {

  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: ""
  });
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupBtnClick = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate("/auth/continue-setup");

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSignupBtnClick}
      action=""
      className={`w-full bg-[#fff] text-[#000] max-w-[20rem] px-5 py-8 flex flex-col items-center gap-4 ${styles.signUp}`}
    >
      <div className="flex flex-col items-center">
        <img src={logo} alt="" className="w-20 h-20" />

        <h2 className="text-2xl">Create your account </h2>
      </div>

      <div className="form-content w-full flex flex-col gap-4">
        <div className="fullname-box w-full flex flex-col items-start gap-2">
          <label htmlFor="fullname" className="flex">
            Fullname <span className="text-red-600">*</span>
            
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jay jay"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
          <small id="name-help" className="text-[0.63em] text-[#666] mt-[-0.5rem] block">This will be used to personalize your experience.</small>
        </div>
        <div className="email-box w-full flex flex-col items-start gap-2">
          <label>
            Email Address <span className="text-red-600">*</span>
            
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jajay1@gmail.com"
            // onChange={(e) => setInputEmail(e.target.value)}
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
          <small id="name-help" className="text-[0.63em] text-[#666] block mt-[-0.5rem]">We'll use this for important notifications and account recovery.</small>
        </div>

        <div className="password-box flex flex-col items-start gap-2">
          <label htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="********"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
          <span className="text-[.62rem] text-left text-blue-500">
            Password length should not be less than 8 characters Must have a mix
            of capital and small letters, symbols, and numbers.
          </span>
        </div>
        <div className="re-password-box w-full flex flex-col items-start gap-2">
          <label htmlFor="email">
            Re-password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="repassword"
            onChange={handleChange}
            placeholder="re-enter password"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
        </div>
        <div className="w-full privacy-consent text-[.9rem] flex flex-col gap-4">
            <p>By clicking "Create account", you agree to our <a href="/privacy-policy.html" target="_blank" className="text-blue-600"><strong>Privacy Policy</strong></a> and <a href="/terms-of-service.html" target="_blank" className="text-blue-600"><strong>Terms of Service</strong></a>.</p>
            <div className="form-group" className="w-full  flex items-start gap-2 relative">
                <input type="checkbox"  name="agreeToTerms" value="yes" id="agreeToTerms" className="mt-1 z-10" required />
                <label htmlFor="agreeToTerms" className="checkbox-label w-full ">I have read and agree to the policies mentioned above.</label>
                <span className="copy-checkbox w-4 h-4 flex justify-center items-center top-1 absolute border border-blue-600 rounded-sm">
            {<FontAwesomeIcon icon={faCheck} className="text-xs text-[#fff]" />}
          </span>
            </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-[2.5rem] bg-blue-600 text-[#fff] text-lg font-semibold flex justify-center items-center rounded-3xl cursor-pointer"
      >
        Create account
      </button>
      <p>
        Already have an account? <Link to="/auth/login">Sign in</Link>
      </p>
    </form>
  );
};

export default SignUp;

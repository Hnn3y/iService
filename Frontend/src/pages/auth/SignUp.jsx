import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
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
          <label htmlFor="fullname">
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

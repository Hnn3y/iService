import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import styles from "./account-setup.module.css";


const AccountSetup = () => {
    const [profilePic, setProfilePic] = useState("");

    const handleProfilePicBtn = (e) => {
        e.preventDefault();
        setProfilePic(e.target.value);
        
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setProfilePic(imageUrl);
        }
    }

    const navigate = useNavigate();
    const handleNextBtnClick = () => {
        navigate("/auth/finishacctsetup")
    }
    return (
      <form
        action=""
        className={`w-full bg-[#fff] text-[#000] max-w-[20rem] px-5 py-8 flex flex-col items-center gap-4 ${styles.accountSetup}`}
      >
        <div className="w-full flex flex-col items-center">

          <h2 className="text-2xl font-semibold">Set Up Your Account </h2>
          <h4 className="mt-5 mb-2 font-semibold self-start">
            Personal Details
          </h4>
          <div className="w-full flex  items-center gap-4">
            <div className="user bg-[#A4C2FD] w-20 h-20 flex justify-center items-center self-start rounded-full relative">
              {profilePic ? (
                <img src={profilePic} alt="user profile pic" />
              ) : (
                <FontAwesomeIcon icon={faUser} className="text-4xl" />
              )}
              <input
                type="file"
                className="w-7 h-7 rounded-full absolute bottom-[-1rem] right-[-.5rem] z-[1] opacity-0"
                accept="image/*"
                onChange={handleProfilePicBtn}
              />
              <span className="bg-[#397BFF] w-7 h-7 flex justify-center items-center absolute bottom-[-.4rem] right-[.1rem] rounded-full">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="text-md text-[#fff] "
                />{" "}
              </span>
            </div>
            <p className="text-sm text-left">
              Upload your profile picture <br /> JPEG not up to 5MB
            </p>
          </div>
        </div>

        <div className="form-content w-full flex flex-col gap-4">
          <div className="fullname-box w-full flex flex-col items-start gap-2">
            <label htmlFor="fullname">
              Fullname <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Jay jay"
              className="w-full h-[2.5rem] px-4 border rounded-3xl"
            />
          </div>
          <div className="email-box w-full flex flex-col items-start gap-2">
            <label htmlFor="">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="jajay1@gmail.com"
              className="w-full h-[2.5rem] px-4 border rounded-3xl"
            />
          </div>

          <div className="password-box flex flex-col items-start gap-2">
            <label htmlFor="">
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="+234 90918273645"
              className="w-full h-[2.5rem] px-4 border rounded-3xl"
            />
          </div>
          <div className="re-password-box w-full flex flex-col items-start gap-2">
            <label htmlFor="">
              Residential Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Sanusi Street, Bariga, Lagos state"
              className="w-full h-[2.5rem] px-4 border rounded-3xl"
            />
          </div>
        </div>

        <button
          className="w-full h-[2.5rem] bg-blue-600 text-[#fff] text-lg font-semibold mt-6 flex justify-center items-center rounded-3xl"
          onClick={handleNextBtnClick}
        >
          Next
        </button>
      </form>
    );
}

export default AccountSetup;
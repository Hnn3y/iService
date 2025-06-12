import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
import styles from "./finish-account-setup.module.css";

const FinishAccountSetup = () => {
  // const [profilePic, setProfilePic] = useState("");

  // const handleProfilePicBtn = (e) => {
  //     e.preventDefault();
  //     setProfilePic(e.target.value);

  //     const file = e.target.files[0];
  //     if (file) {
  //       const imageUrl = URL.createObjectURL(file);
  //       setProfilePic(imageUrl);
  //     }
  // }

  const navigate = useNavigate();
  const handleNextBtnClick = () => {
    navigate("/auth/profilepreview");
  };
  return (
    <form
      action=""
      className={`w-full bg-[#fff] text-[#000] max-w-[20rem] px-5 py-8 flex flex-col items-center gap-4 ${styles.finishAccountSetup}`}
    >
      <div
        className={`w-full flex flex-col items-center gap-4 ${styles.customSelect}`}
      >
        <h2 className="text-2xl font-semibold">Finish Your Account Setup </h2>
        <h4 className="mt-5 mb-2 font-semibold self-start">Occupation</h4>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Occupation <span className="text-red-600">*</span>
          </label>
          <select name="" id="">
            <option value="">Electrician</option>
            <option value="">Bricklayer</option>
            <option value="">Mechanic</option>
          </select>
        </div>
        <div className="email-box w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Job title <span className="text-red-600">*</span>
          </label>
          <select name="" id="">
            <option value="">Electrician</option>
            <option value="">Bricklayer</option>
            <option value="">Mechanic</option>
          </select>
        </div>

        <div className="password-box flex flex-col items-start gap-2">
          <label htmlFor="">
            Year of experience <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter Year of Experience"
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
};

export default FinishAccountSetup;

import { useState, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./profile-preview.module.css";

const ProfilePreview = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleFinishSetupBtnClick = (e) => {
    e.preventDefault()
    navigate("/");
    console.log(user.occupation)
  };

  return (
    <form
      action=""
      className={`w-full bg-[#fff] text-[#000] max-w-[20rem] px-5 py-8 flex flex-col items-center gap-4 ${styles.profilePreview}`}
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Preview Your Profile </h2>

        <div className="w-full py-6 flex justify-center items-center gap-4">
          <div className="user bg-[#A4C2FD] w-20 h-20 flex justify-center items-center rounded-full relative ">
            <div className="profile-img-box w-full h-full flex justify-center items-center overflow-hidden rounded-full">
            {user.profileImage ? (
              <img src={user.profileImage} alt="User profile" />
            ) : (
              <p className="text-xs">No profile image uploaded.</p> // or render a placeholder
            )}
</div>
            <input
              type="file"
              className="w-7 h-7 rounded-full absolute bottom-[-1rem] right-[-.5rem] z-[1] opacity-0"
              accept="image/*"
              // onChange={handleProfilePicBtn}
            />
            <span className="bg-[#397BFF] w-7 h-7 flex justify-center items-center absolute bottom-[-.4rem] right-[.1rem] rounded-full">
              <FontAwesomeIcon
                icon={faCamera}
                className="text-md text-[#fff] "
              />{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="edit-profile w-full flex flex-col items-center gap-2">
        <p className="text-lg font-semibold">
          {" "}
          Email: {user.email || "no email found!!!"}
        </p>
        <Link
          to="/auth/signup"
          className="edit text-[#397BFF] text-[12px] w-[119px] h-[40px] flex justify-center items-center gap-2 border border-[#397BFF] rounded-xl"
        >
          <p>Edit Profile</p>
          <span>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-md text-[#397BFF]"
            />
          </span>
        </Link>
      </div>

      <div
        className={`form-content w-full flex flex-col gap-4 ${styles.customSelect}`}
      >
        <div className="fullname-box w-full flex flex-col items-start gap-2">
          <label htmlFor="fullname">
            Phone number <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            value={user.phone}
            readOnly
            placeholder="+234 9095465789"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
        </div>
        <div className="email-box w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Residential address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={user.address}
            readOnly
            placeholder="Sanusi Street, Bariga, Lagos state"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Occupation <span className="text-red-600">*</span>
          </label>
          <select name="" id="">
            <option value="">Service Rendered</option>
            <option value="">Bricklayer</option>
            <option value="">Mechanic</option>
          </select>
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Job description <span className="text-red-600">*</span>
          </label>
          <select name="" id="" >
            <option value="">Architectural Design</option>
            <option value="">Bricklayer</option>
            <option value="">Mechanic</option>
          </select>
        </div>

        <div className="password-box flex flex-col items-start gap-2">
          <label htmlFor="">
            Registration number <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            placeholder="SMM1234567"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
          />
        </div>
      </div>

      <button
        className="w-full h-[2.5rem] bg-blue-600 text-[#fff] text-lg font-semibold mt-6 flex justify-center items-center rounded-3xl cursor-pointer"
        onClick={handleFinishSetupBtnClick}
      >
        Finish set up
      </button>
    </form>
  );
};

export default ProfilePreview;


import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./finish-account-setup.module.css";

const FinishAccountSetup = () => {
  const { user, setUser } = useContext(UserContext);

  const [occupation, setOccupation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");

  const navigate = useNavigate();
  
    // New useEffect hook to log user after it updates
    useEffect(() => {
      // This code will run AFTER user state has been updated and component re-rendered
      console.log(`Updated User Context: ${user.occupation} ${user.jobTitle} ${user.yearOfExperience}`);
      // You could potentially navigate here too, if navigation should strictly depend on user update
    }, [user]); // Depend on the 'user' object from context
  
  const handleNextBtnClick = (e) => {
    e.preventDefault();

    setUser(prev => ({
      ...prev,
      occupation,
      jobTitle,
      yearOfExperience

    }));

 
    navigate("/auth/profilepreview");
    // console.log(`${user.occupation} ${user.jobTitle} ${user.yearOfExperience}`)
  };

  // const handleOccupationChange = (event) => {
  //   // event.target.value correctly gives you the selected option's value
  //   setOccupation(event.target.value);
  // };

  return (
    <form
      onSubmit={handleNextBtnClick}
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
          <select name="occupation" id="" value={occupation} onChange={(event) => setOccupation(event.target.value)} >
            <option value="electrician">Electrician</option>
            <option value="bricklayer">Bricklayer</option>
            <option value="mechanic">Mechanic</option>
          </select>
        </div>
        <div className="email-box w-full flex flex-col items-start gap-2">
          <label htmlFor="">
            Job title <span className="text-red-600">*</span>
          </label>
          <select name="jobtitle" id="" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)}>
            <option value="Electrician">Electrician</option>
            <option value="Bricklayer">Bricklayer</option>
            <option value="Mechanic">Mechanic</option>
          </select>
        </div>

        <div className="password-box flex flex-col items-start gap-2">
          <label htmlFor="">
            Year of experience <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            value={yearOfExperience}
            placeholder="Enter Year of Experience"
            className="w-full h-[2.5rem] px-4 border rounded-3xl"
            onChange={(event) => setYearOfExperience(event.target.value)}
          />
        </div>
      </div>

      <button
      type="submit"
        className="w-full h-[2.5rem] bg-blue-600 text-[#fff] text-lg font-semibold mt-6 flex justify-center items-center rounded-3xl"
      >
        Next
      </button>
    </form>
  );
};

export default FinishAccountSetup;

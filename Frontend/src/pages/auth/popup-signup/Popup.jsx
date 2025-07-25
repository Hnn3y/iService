
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import signupPopup from "../../../assets/icon-signup-popup.png";


const SignupPopup = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSetupAccBtnClick = (e) => {
      e.preventDefault();
      navigate("/auth/accountsetup");
      console.log(`${user.name} ${user.email} ${user.password} ${user.rePassword}` || "No User email found");
    };
    return(
        <div className="flex justify-center items-center absolute inset-2">
            <div className="content w-72 bg-[#fff] text-[#222] px-4 py-10 flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="icon-box">
                    <img src={signupPopup} alt="" className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-bold">You're Almost Done <br /> Great Job!</h2>
                <p className="text-gray-500">You have succesfully signed up</p>
                <button className="w-full h-[2.5rem] bg-[#044BDA] text-[#fff] text-lg font-semibold flex justify-center items-center rounded-xl cursor-pointer" onClick={handleSetupAccBtnClick}>Set up your account</button>
            </div>

        </div>
    )
}

export default SignupPopup;
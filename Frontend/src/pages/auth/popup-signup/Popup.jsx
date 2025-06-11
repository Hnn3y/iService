import { Link } from "react-router-dom";
import signupPopup from "../../../assets/icon-signup-popup.png";


const SignupPopup = () => {

    return(
        <div className="flex justify-center items-center absolute inset-2">
            <div className="content w-72 bg-[#fff] text-[#222] px-4 py-10 flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="icon-box">
                    <img src={signupPopup} alt="" className="w-16 h-16" />
                </div>
                <h2 className="text-xl font-bold">You're Almost Done <br /> Great Job!</h2>
                <p className="text-gray-500">You have succesfully signed up</p>
                <Link className="w-full h-[2.5rem] bg-[#044BDA] text-[#fff] text-lg font-semibold flex justify-center items-center rounded-xl">Set up your account</Link>
            </div>

        </div>
    )
}

export default SignupPopup;
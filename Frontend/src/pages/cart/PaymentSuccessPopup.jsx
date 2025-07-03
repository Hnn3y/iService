
// import { useContext } from "react";
// import { UserContext } from "../../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const PaymentInfoPopup = () => {
    const navigate = useNavigate();
    const handleHomeBtnClick = () => {
    //   e.preventDefault();
      navigate("/");
      console.log("Button was clicked")
    };
    return(
        <div className="h-screen flex justify-center items-center isolate">
            <div className="content w-72 bg-[#fff] text-[#222] px-4 py-10 flex flex-col items-center justify-center gap-4 rounded-3xl">
                <div className="icon-box">
                    {/* <img src={paymentSuccessPopup} alt="" className="w-16 h-16" /> */}
                    <div className="circle w-20 h-20 p-4 flex justify-center items-center border-5 border-[#044BDA] rounded-full">
                        <div className="square w-9 h-9 bg-[#044BDA] flex justify-center items-center rounded">
                        {<FontAwesomeIcon icon={faCheck} className="text-xl text-[#fff]" />}
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-bold"> Great Job!</h2>
                <p className="text-gray-500">Payment Succesful</p>
                <button className="w-full h-[2.5rem] bg-[#044BDA] text-[#fff] text-lg font-semibold flex justify-center items-center rounded-xl cursor-pointer" onClick={handleHomeBtnClick}>Home</button>
            </div>

        </div>
    )
}

export default PaymentInfoPopup;
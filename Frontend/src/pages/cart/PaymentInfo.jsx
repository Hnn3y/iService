
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./paymentinfo.module.css";
const PaymentInfo = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/usertrue/paymentsuccesspopup");
      console.log("Payment was successful!!!")
    };

  return (
    <section
      className={`cart w-full px-7 py-4 pb-[8rem] flex flex-col items-center isolate relative ${styles.paymentInfo}`}
    >
      <button className="backward-arrow w-[1.5rem] aspect-square bg-[#fff] text-blue-600 absolute left-7 top-6 rounded">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <h2 id="cart-items-title" className="text-[1.6rem] text-[#222] font-semibold">
        Payment Information
      </h2>
      <h3 className="text-[#222] text-[1.5rem] font-semibold mt-[3rem] mb-[.5rem]">
        Transfer into the account below
      </h3>

      <div className="payment-box w-full flex flex-col gap-28">
        <div className="top bg-[#7098E8] text-[#000] font-semibold flex flex-col items-start">
          <span className="">Account Number: 0*********0</span>
          <span>Bank: Kuda</span>
          <span>Account Name: Iservice</span>
        </div>

        <div className="bg-[#7098E8] flex flex-col items-start gap-4 rounded p-3 font-semibold">
          <h4>Requirements</h4>
          <form  onSubmit={handleSubmit} className="input-box w-full flex flex-col items-start gap-4">
            <div className="input-box w-full pb-2 flex flex-col items-start relative">
              <label htmlFor="" className="text-xs">
                Receipt Proof
              </label>
              <input type="file" className="w-full border opacity-1 z-10 cursor-pointer" />
              <div className="btnmimic w-full text-blue-500 text-xs p-[.2rem] flex rounded absolute bottom-0 border border-[#fff]"><span className="w-[5rem] bg-[#fff] text-blue-500 px-2 py-1 rounded cursor-pointer">Select File</span></div>
            </div>
            <button type="submit" className="self-end w-[5rem] bg-[#fff] text-blue-500 px-2 rounded cursor-pointer">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;


import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import transferIcon from "../../assets/transfer-icon.png";
import CartItem from "./CartItem";

const Cart = () => {

    const navigate = useNavigate();
    const handlePaynowBtnClick = () => {
    //   e.preventDefault();
      navigate("/usertrue/paymentinfo");
      console.log("Please pay and upload your payment proof!")
    };

    return(
        <section className="cart w-full px-7 py-4 pb-[8rem] flex flex-col items-center isolate relative">
            <button className="backward-arrow w-[1.5rem] aspect-square bg-[#fff] text-blue-600 absolute left-7 rounded">
                <FontAwesomeIcon icon={ faAngleLeft} />
            </button>
            <h2 id="cart-items-title" className="text-2xl text-[#222] font-semibold">Cart</h2>
            <div className="cart-items-box flex flex-col items-center gap-2">
                <CartItem />
            </div>

            <div className="payment-option w-full max-w-[16rem] bg-[#fff] p-8 mt-[4rem] flex flex-col gap-5 rounded-lg">
                <div className="top text-[#000] font-bold flex flex-col items-center gap-0">
                    <img src={transferIcon} alt="" className="w-[6rem]" />
                   <span> Bank Transfer</span><span>(Naira)</span>
                </div>

                <button className="bg-[#117BF5] rounded px-2 py-1 font-semibold cursor-pointer" onClick={handlePaynowBtnClick}>Pay now</button>
            </div>
        </section>
    )
}

export default Cart;
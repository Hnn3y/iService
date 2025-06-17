
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg"


const userDetails = [
    {userImg:image1, userName: "Seun Adekunle", jobDescription: "Expert Electrician"},
    {userImg:image2, userName: "Dave Jnr", jobDescription: "Expert Home Plumber"}
    
]

const CartItem = () => {

    return (
        <>
        { userDetails.map((user, index) => (
      <article key={index} className="w-full h-[6rem] bg-[#fff] text-[#222] py-[.8rem] px-4 flex items-center gap-4 rounded">
        <div className="img-box w-[5rem] h-full">
          <img src={user.userImg} alt="" className="w-full"/>
        </div>

        <div className="details-box w-full h-full flex justify-between items-center">
          <div className="profile-details flex flex-col items-start">
            <h4 className="profile-name font-semibold">{user.userName}</h4>
            <p className="job-description text-blue-600 text-sm">{user.jobDescription}</p>
          </div>
          <div className="save-or-cancel h-full flex flex-col justify-between items-end">
            <span className="save bg-[#D9D9D9] py-[.1rem] px-[.4rem] rounded">
              <FontAwesomeIcon icon={faBookmark} className="text-[#6d6d6d]"/>
            </span>
            <button className="bg-[#D9D9D9] text-sm font-semibold  px-2 rounded-lg">Cancel</button>
          </div>
        </div>
      </article>
    ))}
    </>
    );
}

export default CartItem;
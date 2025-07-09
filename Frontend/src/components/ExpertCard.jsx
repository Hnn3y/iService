import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center">
      <img
        src={expert.image}
        alt={expert.name}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div className="flex-1">
        <h3 className="text-base font-semibold">{expert.name}</h3>
        <p className="text-sm text-blue-600">{expert.subrole}</p>
        <div className="flex gap-4 text-xs mt-1 text-gray-600">
          <span>⭐ {expert.rating}</span>
          <span>Total Jobs: {expert.jobs}</span>
          <span>Rate: ₦{expert.rate}</span>
        </div>
      </div>
      <FontAwesomeIcon icon={faBookmark} className="text-gray-400 text-lg" />
    </div>
  );
};

export default ExpertCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";

const ExpertCard = ({ expert }) => {

    return (
        <div className="bg-white p-4 rounded-md shadow-sm flex gap-4 items-center mb-4">
            <img 
            src={expert.image}
            alt={expert.name}
            className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex-1">
                <h2 className="font-smeibold">{expert.name}</h2>
                <p className="text-blue-500 text-sm">{expert.title}</p>
                <div className="text-sm mt-1 flex gap-4"></div>
            </div>
        </div>
    )
}
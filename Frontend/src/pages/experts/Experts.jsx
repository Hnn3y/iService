import { useParams } from "react-router-dom";
import { useExpert } from "../../contexts/ExpertContext";
import ExpertCard from "../../components/ExpertCard";
import BottomNav from "../../components/BottomNav";
import { FaArrowLeft } from "react-icons/fa";

const Experts = () => {
  const { category } = useParams();
  const { expertsByCategory } = useExpert();
  const experts = expertsByCategory[category.toLowerCase()] || [];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="flex items-center mb-4">
        <FaArrowLeft className="text-gray-600 mr-2" />
        <h2 className="text-lg font-semibold capitalize">
          Find Expert in {category} Field
        </h2>
      </div>
      {experts.length === 0 ? (
        <p>No experts yet in this category.</p>
      ) : (
        <div className="space-y-4">
          {experts.map((expert, index) => (
            <ExpertCard key={index} expert={expert} />
          ))}
        </div>
      )}
      <BottomNav />
    </div>
  );
};

export default Experts;

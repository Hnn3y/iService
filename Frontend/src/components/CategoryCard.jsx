import { useCategory } from "../context/CategoryContext";

const CategoryCard = ({ name }) => {
  const { selectCategory } = useCategory();

  const handleClick = () => {
    selectCategory(name);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[100px] h-[100px] bg-gray-200 rounded-lg flex items-center justify-center text-sm font-medium shadow-sm cursor-pointer hover:bg-blue-100 transition-colors"
    >
      {name}
    </div>
  );
};

export default CategoryCard;

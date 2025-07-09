import CategoryCard from "../../components/CategoryCard";
import BottomNav from "../../components/BottomNav";
import { FaSearch } from "react-icons/fa";

const categories = ["Laundry", "Cleaning", "Repairs", "Plumbing", "Electrical", "Carpenter"];

const Home = () => (
  <div className="min-h-screen pb-20 px-4 pt-6 bg-gray-50 text-gray-900">
    <h1 className="text-2xl font-bold text-center mb-4">Home</h1>

    {/* Search */}
    <div className="flex items-center border border-blue-500 rounded-md px-3 py-2 mb-6 bg-gray-100">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow outline-none bg-transparent text-sm text-blue-600 placeholder-blue-600"
      />
      <FaSearch className="text-blue-600 text-sm" />
    </div>

    {/* Categories */}
    <h2 className="text-base font-semibold mb-2">Categories</h2>
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {categories.map((cat) => (
        <CategoryCard key={cat} name={cat} />
      ))}
    </div>

    <BottomNav />
  </div>
);

export default Home;

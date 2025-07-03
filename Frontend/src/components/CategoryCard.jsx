const CategoryCard = ({ title}) => {

    return ( 
        <div className="bg-gray-300 w-28 h-28 rounded-md flex items-center justify-center font-semibold text-center text-sm shadow"
        >
            {title} 
        </div>
    );
};

export default CategoryCard;
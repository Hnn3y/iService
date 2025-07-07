const CategoryCard = ({ name }) => {

    return ( 
        <div className="flex justify-center items-center 
        w-[100px] h-[100px] bg-gray-200 rounded-lg shadow-sm 
        text-center text-sm font-medium"
        
        >
            {name} 
        </div>
    );
};

export default CategoryCard;
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/mainlayout/MainLayout';
import ExpertCard from '../components/ExpertCard';

const ExpertData = () => {

}

const CategoryExperts = () => { 
    const { category } = useParams();
    const experts = ExpertData[category] || [];

    return (
        <MainLayout>
                    <button onclick= { () => window.history.back()}
                    className='text-blue-500 text-sm mb-4'>
                        Back
                    </button>
                    <h1 className='text-xl font-semibold mb-6'>
                        Find Expert in {CategoryExperts.charAt(0).toUpperCase() + category.slice(1)} Filed 
                    </h1>

                    {experts.map((expert, index) => (
                        <ExpertCard key={index} expert={expert} />
                    ))}
            
        </MainLayout>
    );

}

export default CategoryExperts;
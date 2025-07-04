
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MainLayout = () => {

    return(
        <div className='flex flex-col min-h-screen bg-gray-50 text-gray-900'>
            <Header/>
            <main className='flex-grow w-full max-w-7xl mx-auto px-4 py-6'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
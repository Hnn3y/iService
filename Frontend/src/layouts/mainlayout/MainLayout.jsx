
import { Outlet, Link } from 'react-router-dom';
import styles from './mainlayout.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BottomNav from '../../components/BottomNav'; 

const MainLayout = ({ bottom }) => {
    return(
        <div className= "min-h-screen flex flex-col justify-between bg-gray-50">
            <main className="flex-1 p-4">{bottom}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;
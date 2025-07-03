
import { Outlet, Link } from 'react-router-dom';
import styles from './mainlayout.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MainLayout = () => {
    return(
        <div className={`w-full ${styles.mainlayout}`}>
            <Header />
            <main className='w-[100%] h-full flex flex-col items-center  overflow-y-scroll'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
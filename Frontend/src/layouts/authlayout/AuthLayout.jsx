


import { Outlet } from 'react-router-dom';
import styles from "./authlayout.module.css";

const AuthLayout = () => {
    return(
        <div className={`w-full ${styles.authLayout}`}>
            <main className='w-[100%] h-full flex flex-col items-center  overflow-y-scroll'>
                <Outlet />
            </main>
            
        </div>
    )
}

export default AuthLayout
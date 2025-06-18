
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/main-navigation/mainNavigation";
import styles from "./usertruelayout.module.css";
const UserTrueLayout = () => {

    return (
        <div className={`w-full ${styles.userTrueLayout}`}>
            <main className='w-[100%] h-full flex flex-col items-center  overflow-y-scroll'>
                <Outlet />
                <MainNavigation />
            </main>

        </div>
    );
}

export default UserTrueLayout;
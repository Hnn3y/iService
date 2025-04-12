
import styles from "./header.module.css";

const Header = () => {
    return(
        <header className={`w-full h-[4rem] flex justify-center items-center ${styles.header}`}>
            <h2>I am Header</h2>
        </header>
    )
}

export default Header
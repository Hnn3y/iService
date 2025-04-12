
import styles from "./footer.module.css";

const Footer = () => {
    return(
        <footer className={`h-[4rem] flex justify-center items-center ${styles.footer}`}>
            <h2>I am Footer</h2>
        </footer>
    )
}

export default Footer
import styles from "./home.module.css";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className={`home h-full flex flex-col justify-center items-center ${styles.home}`}>
      <h1>Emma + Henny</h1>
      <div className="card">
        <Button variant="contained" color="primary">
          AM MUI BTN
        </Button>
        <p>
          Enjoy your coffee fontawesome icon!{" "}
          <FontAwesomeIcon icon={faCoffee} />
        </p>
      </div>
      <p className="border border-red-300">
        Frontend lover was checking some stuffs out.
      </p>
    </div>
  );
};

export default Home;

import styles from "./home.module.css";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../Carousel';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Carousel />
    </div>
  );
};

export default Home;

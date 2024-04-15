import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch }) => {
  const location = useLocation();

  return (
    <div className={styles.navCont}>
      <nav className={styles.nav}>
        <div className={styles.centeredLinks}>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
          <Link to="/activityForm" className={styles.link}>
            Crear actividad
          </Link>
        </div>
        <div className={styles.searchBarContainer}>
          {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

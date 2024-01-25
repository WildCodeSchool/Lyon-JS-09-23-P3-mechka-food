import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import home from "../../assets/svg/HomeMobile.svg";
import search from "../../assets/svg/search.svg";
import plus from "../../assets/svg/Plus.svg";
import About from "../../assets/svg/About.svg";
import favoris from "../../assets/svg/Favoris.svg";

export default function Navbar() {
  return (
    <nav className={styles.menumobile}>
      <ul>
        <li className={styles.iconMobile}>
          <Link to="/">
            <img className={styles.Navbaricon} src={home} alt="home" />
          </Link>
        </li>
        <li>
          <Link to="/recipes/search">
            <img className={styles.Navbaricon} src={search} alt="search" />
          </Link>
        </li>
        <li>
          <Link to="/recipes/add">
            <img className={styles.naviconplus} src={plus} alt="icon plus" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img className={styles.Navbaricon} src={favoris} alt="favoris" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              className={styles.Navbaricon}
              src={About}
              alt="logo of application"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

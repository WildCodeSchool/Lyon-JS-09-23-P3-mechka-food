import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/svg/LOGO_MECHKA_FOOD.svg";
import home from "../../assets/svg/HomeMobile.svg";
import search from "../../assets/svg/search.svg";
import plus from "../../assets/svg/Plus.svg";
import About from "../../assets/svg/About.svg";
import favoris from "../../assets/svg/Favoris.svg";
import homeDesktop from "../../assets/svg/HomeDesktop.svg";
import SearchDescktop from "../../assets/svg/SearchDesktop.svg";
import FavorisDesktop from "../../assets/svg/FavorisDesktop.svg";
import PlusDesktop from "../../assets/svg/PlusDesktop.svg";
import ProfileDesktop from "../../assets/svg/ProfileDesktop.svg";
import AboutDesktop from "../../assets/svg/AboutDesktop.svg";
import ContactDesktop from "../../assets/svg/ContactDesktop.svg";

export default function Navbar() {
  return (
    <>
      <div className={styles.Navbarcontainer}>
        <nav className={styles.mainmenu}>
          <ul>
            <img className={styles.logo} src={logo} alt="logo of application" />
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={homeDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Home</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/recipes/search">
                <img
                  className={styles.Navbaricon}
                  src={SearchDescktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Search</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={FavorisDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Favoris</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={PlusDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>New Post</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={ProfileDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Profile</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.logout}>
            <li>
              <Link to="/">
                <img
                  className={styles.naviconbas}
                  src={AboutDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img
                  className={styles.naviconbas}
                  src={ContactDesktop}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* navbar pour version mobile  */}
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
            <Link to="/">
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
    </>
  );
}

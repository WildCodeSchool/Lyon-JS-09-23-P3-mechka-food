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
                  alt="icon home"
                />
                <span className={styles.navtext}>Accueil</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/recipes/search">
                <img
                  className={styles.Navbaricon}
                  src={SearchDescktop}
                  alt="icon search"
                />
                <span className={styles.navtext}>Recherche</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={FavorisDesktop}
                  alt="icon favoris"
                />
                <span className={styles.navtext}>Favoris</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={PlusDesktop}
                  alt="icon new post"
                />
                <span className={styles.navtext}>Nouvelle recette</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.Navbaricon}
                  src={ProfileDesktop}
                  alt="icon profile"
                />
                <span className={styles.navtext}>Profil</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.logout}>
            <li className={styles.linav}>
              <Link to="/">
                <img
                  className={styles.naviconbas}
                  src={AboutDesktop}
                  alt="icon about us"
                />
                <span className={styles.navtext}>À propos de nous</span>
              </Link>
            </li>
            <li className={styles.linav}>
              <Link to="/contact">
                <img
                  className={styles.naviconbas}
                  src={ContactDesktop}
                  alt="icon contact us"
                />
                <span className={styles.navtext}>Contact Nous</span>
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

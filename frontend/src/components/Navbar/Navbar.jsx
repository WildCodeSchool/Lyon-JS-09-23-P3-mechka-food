import styles from "./Navbar.module.css";
// import logo from "../../assets/images/logo.png";
import home from "../../assets/svg/HomeMobile.svg";
import search from "../../assets/svg/search.svg";
import plus from "../../assets/svg/Plus.svg";
import About from "../../assets/svg/About.svg";
import favoris from "../../assets/svg/Favoris.svg";

export default function Navbar() {
  return (
    <>
      {/* <div className={styles.area}>
        <nav className={styles.mainmenu}>
          <ul>
            <img className={styles.logo} src={logo} alt="logo of application" />
            <li className={styles.linav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={home}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Home</span>
              </a>
            </li>
            <li className={styles.linav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Search</span>
              </a>
            </li>
            <li className={styles.linav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Favoris</span>
              </a>
            </li>
            <li className={styles.linav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>New Post</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Profile</span>
              </a>
            </li>
          </ul>
          <ul className={styles.logout}>
            <li>
              <a href="/">
                <img
                  className={styles.naviconbas}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>About Us</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className={styles.naviconbas}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className={styles.naviconbas}
                  src={logo}
                  alt="logo of application"
                />
                <span className={styles.navtext}>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      {/* navbar pour version mobile  */}
      <nav className={styles.menumobile}>
        <ul>
          <li className={styles.iconMobile}>
            <a href="/">
              <img className={styles.navicon} src={home} alt="home" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className={styles.navicon} src={search} alt="search" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className={styles.naviconplus} src={plus} alt="icon plus" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className={styles.navicon} src={favoris} alt="favoris" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className={styles.navicon} src={About} alt="about us" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

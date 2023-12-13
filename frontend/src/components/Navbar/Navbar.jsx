import { useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

export default function Navar() {
  useEffect(() => {
    const menuContainer = document.querySelector(".area");

    if (menuContainer !== null) {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 767) {
        menuContainer.classList.add("Navarmobile");
      } else {
        menuContainer.classList.remove("Navarmobile");
      }
    }
  }, []);

  return (
    <>
      <div className={styles.area}>
        <nav className={styles.mainmenu}>
          <ul>
            <img className={styles.logo} src={logo} alt="logo of application" />
            <li className={styles.hassubnav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <i className={styles.fa2x} />
                <span className={styles.navtext}>Home</span>
              </a>
            </li>
            <li className={styles.hassubnav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <i className={styles.fa2x} />
                <span className={styles.navtext}>Search</span>
              </a>
            </li>
            <li className={styles.hassubnav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <i className={styles.fa2x} />
                <span className={styles.navtext}>Favoris</span>
              </a>
            </li>
            <li className={styles.hassubnav}>
              <a href="/">
                <img
                  className={styles.navicon}
                  src={logo}
                  alt="logo of application"
                />
                <i className={styles.fa2x} />
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
                <i className={styles.fa2x} />
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
                <i className={styles.fa2x} />
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
                <i className={styles.fa2x} />
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
                <i className={styles.fa2x} />
                <span className={styles.navtext}>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* navbar pour version mobile  */}
      <nav className={styles.menumobile}>
        <ul>
          <li>
            <a href="/">
              <img
                className={styles.navicon}
                src={logo}
                alt="logo of application"
              />
              <i className={styles.fa2x} />
              <span className={styles.navtext}>Logout</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.navicon}
                src={logo}
                alt="logo of application"
              />
              <i className={styles.fa2x} />
              <span className={styles.navtext}>Logout</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.navicon}
                src={logo}
                alt="logo of application"
              />
              <i className={styles.fa2x} />
              <span className={styles.navtext}>Logout</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className={styles.navicon}
                src={logo}
                alt="logo of application"
              />
              <i className={styles.fa2x} />
              <span className={styles.navtext}>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

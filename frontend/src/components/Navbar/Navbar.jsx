import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import home from "../../assets/svg/HomeMobile.svg";
import search from "../../assets/svg/search.svg";
import plus from "../../assets/svg/Plus.svg";
import About from "../../assets/svg/About.svg";
import profil from "../../assets/images/profilPicture.png";
import { useUserContext } from "../../context/userContext";

export default function Navbar() {
  const { userData } = useUserContext();

  return (
    <nav className={styles.menumobile}>
      <div>
        <Link to="/">
          <img className={styles.Navbaricon} src={home} alt="home" />
        </Link>
      </div>
      <div>
        <Link to="/recipes/search">
          <img className={styles.Navbaricon} src={search} alt="search" />
        </Link>
      </div>
      <div>
        <Link to="/recipes/add">
          <img className={styles.naviconplus} src={plus} alt="icon plus" />
        </Link>
      </div>
      <div>
        {userData !== null &&
        userData !== "null" &&
        userData.user.role_id === 1 ? (
          <Link to="/admin">
            <img className={styles.Navbaricon} src={profil} alt="profil" />
          </Link>
        ) : null}
        {userData !== null &&
        userData !== "null" &&
        userData.user.role_id === 2 ? (
          <Link to="/profil">
            <img className={styles.Navbaricon} src={profil} alt="profil" />
          </Link>
        ) : null}
        {userData === null || userData === "null" ? (
          <Link to="/login">
            <img className={styles.Navbaricon} src={profil} alt="profil" />
          </Link>
        ) : null}
      </div>
      <div>
        <Link to="/contact">
          <img
            className={styles.Navbaricon}
            src={About}
            alt="logo of application"
          />
        </Link>
      </div>
    </nav>
  );
}

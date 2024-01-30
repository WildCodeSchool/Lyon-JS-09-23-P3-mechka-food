import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useUserContext } from "../../context/userContext";
import logo from "../../assets/svg/LOGO_MECHKA_FOOD_mobile.svg";
import profile from "../../assets/svg/profile.svg";

export default function Header() {
  const { logout, userData } = useUserContext();
  const logOutFromSession = () => {
    logout();
  };

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link className={styles.svgLink} to="/">
          <img className={styles.svgLogo} src={logo} alt="profile" />
        </Link>
      </div>

      <h1>MECHKA FOOD</h1>

      <div className={styles.favoris}>
        {userData === "null" || userData === null ? (
          <Link className={styles.svgLink} to="/login">
            <img className={styles.svgProfil} src={profile} alt="profile" />
          </Link>
        ) : (
          <button type="button" onClick={logOutFromSession}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/svg/LOGO_MECHKA_FOOD.svg";
import profile from "../../assets/svg/profile.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link className={styles.svgLink} to="/">
          <img className={styles.svgLogo} src={logo} alt="" />
        </Link>
      </div>

      <h1>MECHKA FOOD</h1>

      <div className={styles.favoris}>
        <Link className={styles.svgLink} to="/profil">
          <img className={styles.svgProfil} src={profile} alt="Profil" />
        </Link>
      </div>
    </div>
  );
}

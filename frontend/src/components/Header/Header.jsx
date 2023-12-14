import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/svg/LOGO_MECHKA_FOOD.svg";
import profile from "../../assets/svg/profile.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link className={styles.svgLink} to="/">
          <img className={styles.svgNavBar} src={logo} alt="" />
        </Link>
      </div>

      <div className={styles.search}>
        <h1>MECHKA FOOD</h1>
      </div>

      <div className={styles.favoris}>
        <Link className={styles.svgLink} to="/favorite">
          <img className={styles.svgNavBar} src={profile} alt="" />
        </Link>
      </div>
    </div>
  );
}

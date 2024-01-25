import { useState } from "react";
import { Link } from "react-router-dom";
import closeButton from "../../assets/images/icone-close.png";
import logoSidebar from "../../assets/svg/LOGO_MECHKA_FOOD.svg";
import logoMenu from "../../assets/svg/icone-menu.svg";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  /* ----------PERMET D'AFFICHER LE MENU AU CHANGEMENT DU STATE-----------*/
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section
        className={`${styles.sidebar} ${isActive ? styles.activeSidebar : ""}`}
      >
        <div className={styles.topPosition}>
          <img
            className={styles.logoMechka}
            src={logoSidebar}
            alt="logo of application"
          />
          <button className={styles.closeButton} type="button" onClick={toggle}>
            <img
              src={closeButton}
              alt="Fermer menu"
              className={styles.iconeClose}
            />
          </button>
        </div>

        <Link className={styles.link} to="/">
          <span className={styles.navtext}>Accueil</span>
        </Link>

        <Link className={styles.link} to="/recipes/search">
          <span className={styles.navtext}>Recherche</span>
        </Link>

        <Link className={styles.link} to="/">
          <span className={styles.navtext}>Favoris</span>
        </Link>

        <Link className={styles.link} to="/">
          <span className={styles.navtext}>Nouvelle recette</span>
        </Link>

        <Link className={styles.link} to="/">
          <span className={styles.navtext}>Profil</span>
        </Link>

        <Link className={styles.link} to="/admin">
          <span className={styles.navtext}>Administareur</span>
        </Link>

        <Link className={styles.link} to="/">
          <span className={styles.navtext}>À propos de nous</span>
        </Link>

        <Link className={styles.link} to="/contact">
          <span className={styles.navtext}>Contactez Nous</span>{" "}
        </Link>
      </section>
      <div className={styles.positionOpenButton}>
        <button
          aria-label="menu button"
          type="button"
          onClick={toggle}
          className={styles.openButton}
        >
          <img src={logoMenu} alt="Ouvrir menu" className={styles.sizeImage} />
        </button>
      </div>
    </>
  );
}

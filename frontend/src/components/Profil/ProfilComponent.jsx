import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./ProfilComponent.module.css";
import profilPicture from "../../assets/images/profilPicture.png";

export default function ProfilComponent() {
  return (
    <>
      <Header />
      <div>
        <div className={styles.outline}>
          <img
            className={styles.imageProfil}
            src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profil"
          />
        </div>
        <div className={styles.outline}>
          <div className={styles.mainCardProfil}>
            <img
              className={styles.svgProfil}
              src={profilPicture}
              alt="Profil"
            />
            <p>Prénom Nom</p>
            <p>Genre</p>
            <p>Email</p>
          </div>
        </div>
        <div className={styles.outline}>
          <div className={styles.cardInformations}>
            <p>Pseudo</p>
            <p>Date de naissance</p>
            <p>Ville</p>
            <p>Mot de passe</p>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
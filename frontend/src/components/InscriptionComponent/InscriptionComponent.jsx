import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./InscriptionComponent.module.css";

export default function InscriptionComponent() {
  return (
    <>
      <Header />
      <div className={styles.outline}>
        <div className={styles.container}>
          <form className={styles.formInscription}>
            <div className={styles.divInscriptionTitle}>
              <h2 className={styles.inscriptionTitle}>INSCRIPTION</h2>
            </div>
            <label>
              <p>Nom :</p>
              <input type="text" name="text" />
            </label>
            <label>
              <p>Prénom :</p>
              <input type="password" name="password" />
            </label>
            <label>
              <p>Pseudo :</p>
              <input type="text" name="pseudo" />
            </label>
            <label>
              <p>Email :</p>
              <input type="mail" name="email" />
            </label>
            <label>
              <p>Mot de passe :</p>
              <input type="password" name="mot de passe" />
            </label>
            <label>
              <p>Confirmer le mot de passe :</p>
              <input type="password" name="mot de passe" />
            </label>
            <button className={styles.subscribeButton} type="button">
              S'inscrire !
            </button>
          </form>
        </div>
      </div>
      <Navbar />
    </>
  );
}

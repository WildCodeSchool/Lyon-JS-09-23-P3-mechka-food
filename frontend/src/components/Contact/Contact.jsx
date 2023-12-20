import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.outline}>
        <div className={styles.container}>
          <form className={styles.formInscription}>
            <div className={styles.divInscriptionTitle}>
              <h2 className={styles.inscriptionTitle}>Contactez Nous</h2>
            </div>
            <label>
              <p>Nom :</p>
              <input className={styles.inputContact} type="text" name="text" />
            </label>
            <label>
              <p>Prénom :</p>
              <input
                className={styles.inputContact}
                type="password"
                name="password"
              />
            </label>
            <label>
              <p>Email :</p>
              <input className={styles.inputContact} type="mail" name="email" />
            </label>
            <label>
              <p>Message :</p>
              <input className={styles.Message} type="Message" name="message" />
            </label>

            <button className={styles.subscribeButton} type="button">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <Navbar />
    </>
  );
}

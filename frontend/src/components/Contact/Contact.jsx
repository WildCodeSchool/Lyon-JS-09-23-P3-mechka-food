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
            <label htmlFor="Nom">
              Nom :
              <input
                className={styles.inputContact}
                type="text"
                name="text"
                id="Nom"
              />
            </label>
            <label htmlFor="Prénom">
              Prénom :
              <input
                className={styles.inputContact}
                type="text"
                name="text"
                id="Prénom"
              />
            </label>
            <label htmlFor="Email">
              Email :
              <input
                className={styles.inputContact}
                type="mail"
                name="email"
                id="Email"
              />
            </label>
            <label htmlFor="Message">
              Message :
              <input
                className={styles.Message}
                type="Message"
                name="message"
                id="Message"
              />
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

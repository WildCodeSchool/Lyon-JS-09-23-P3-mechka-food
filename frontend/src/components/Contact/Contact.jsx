import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <section className={styles.outline}>
        <div className={styles.container}>
          <form className={styles.formInscription}>
            <div className={styles.divInscriptionTitle}>
              <h2 className={styles.inscriptionTitle}>Contactez Nous</h2>
            </div>
            <label htmlFor="Nom">Nom :</label>
            <input
              className={styles.inputContact}
              type="text"
              name="Nom"
              id="Nom"
            />

            <label htmlFor="Prénom">Prénom : </label>
            <input
              className={styles.inputContact}
              type="text"
              name="Prénom"
              id="Prénom"
            />

            <label htmlFor="email">Email :</label>
            <input
              className={styles.inputContact}
              type="mail"
              name="email"
              id="Email"
            />

            <label htmlFor="Message">Message :</label>
            <input
              className={styles.Message}
              type="Message"
              name="message"
              id="Message"
            />

            <button className={styles.subscribeButton} type="button">
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <Navbar />
    </>
  );
}

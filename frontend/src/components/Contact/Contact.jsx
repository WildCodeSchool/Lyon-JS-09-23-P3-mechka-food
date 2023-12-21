import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Header />
      {/* <section className={styles.outline}>
        <div className={styles.container}>
          <form className={styles.formInscription}>
            <div className={styles.divInscriptionTitle}>
              <h2 className={styles.inscriptionTitle}>Contactez Nous</h2>
            </div>
            <label htmlFor="Nom">Nom :</label>
            <input
              className={styles.inputContact}
              type="text"
              name="text"
              id="Nom"
            />

            <label htmlFor="Prénom">Prénom : </label>
            <input
              className={styles.inputContact}
              type="text"
              name="text"
              id="Prénom"
            />

            <label htmlFor="Email">Email :</label>
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
      </section> */}
      <Navbar />
    </>
  );
}

import { CgProfile } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <div className={styles.title}>Nous Contactez</div>
        <div className={styles.outline}>
          <div className={styles.container}>
            <form>
              <div className={styles.name}>
                <span>
                  <CgProfile />
                </span>
                <input
                  id="nom"
                  type="text"
                  placeholder="Nom..."
                  autoComplete="on"
                  required
                />
              </div>
              <div className={styles.name}>
                <span>
                  <CgProfile />
                </span>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Prénom..."
                  autoComplete="on"
                  required
                />
              </div>
              <div className={styles.email}>
                <span>
                  <MdAlternateEmail />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Email..."
                  autoComplete="on"
                  required
                />
              </div>
              <div className={styles.message}>
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                  autoComplete="on"
                  required
                />
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

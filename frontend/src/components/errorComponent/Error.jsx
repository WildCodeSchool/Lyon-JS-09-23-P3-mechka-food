import { Link } from "react-router-dom";
import style from "./Error.module.css";

export default function Error() {
  return (
    <section className={style.section}>
      <p>
        Vous ne pouvez pas accéder à cette page ! Merci de{" "}
        <Link to="/inscription">créer un compte</Link> ou de{" "}
        <Link to="/login">vous connecter</Link> !
      </p>
      <img src="/images/errorMechka.jpg" alt="Error" />
    </section>
  );
}

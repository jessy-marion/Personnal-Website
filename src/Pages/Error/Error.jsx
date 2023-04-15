import img from "../../assets/img/404.png";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className={styles.main}>
      <img src={img} alt="" />
      <p>Oups, une erreur est survenue</p>
      <Link to={"/"}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;

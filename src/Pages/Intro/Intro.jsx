import styles from "./Intro.module.scss";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className={styles.screen}>
      <div className={styles.titleContainer}>
        <h1>
          <span>J</span>essy <span>M</span>arion
        </h1>
        <p>Junior Web Developer</p>
      </div>
      <Link to={"/home"} className={styles.link}>
        Entrer
      </Link>
    </div>
  );
}

export default Intro;

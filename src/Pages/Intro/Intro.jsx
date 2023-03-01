import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.screen}>
      <div className={styles.titleContainer}>
        <h1>
          <span>J</span>essy <span>M</span>arion
        </h1>
        <p>Junior Web Developer</p>
      </div>
      <div className={styles.link}>Entrer</div>
    </div>
  );
}

export default Intro;

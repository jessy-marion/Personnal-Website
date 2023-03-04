import styles from "./Progressbar.module.scss";
function Progressbar() {
  return (
    <div className={styles.bar}>
      <div className={styles.ninety}></div>
    </div>
  );
}

export default Progressbar;

// Todo: Modifier ce component pour qu'il soit reutilisable (recuperer data %) plus  animation

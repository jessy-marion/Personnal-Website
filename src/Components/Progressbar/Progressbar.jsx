import styles from "./Progressbar.module.scss";
function Progressbar({ lvl }) {
  return (
    <div className={styles.bar}>
      <div className={styles.progress} style={{ width: lvl + "%" }}></div>
    </div>
  );
}

export default Progressbar;

// Todo: Modifier ce component pour qu'il soit reutilisable (recuperer data %) plus  animation

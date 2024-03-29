import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Jessy Marion. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

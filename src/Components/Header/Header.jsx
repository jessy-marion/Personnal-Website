import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>{" "}
          <li>
            <Link to={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  function handleClick() {
    setMenu(!menu);
  }

  return (
    <header className={styles.header}>
      <nav>
        {menu && (
          <ul className={styles.menu} onClick={handleClick}>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/cv"}>CV</Link>
            </li>
            <li>
              <Link to={"/Portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        )}
        <ul className={styles.links}>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>
          <li>
            <Link to={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <i
          className={`${styles.hamburger} fa-solid fa-bars`}
          onClick={handleClick}
        ></i>
      </nav>
    </header>
  );
}

export default Header;

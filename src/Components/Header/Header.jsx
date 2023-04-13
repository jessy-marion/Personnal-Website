import { NavLink, Link } from "react-router-dom";
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
            <NavLink
              to={"/home"}
              className={({ isActive, isPending }) =>
                isPending ? styles.isPending : isActive ? styles.isActive : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cv"}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? styles.isActive : ""
              }
            >
              CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/portfolio"}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? styles.isActive : ""
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? styles.isActive : ""
              }
            >
              Contact
            </NavLink>
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

//Todo: focus sur l'onglet actif !!

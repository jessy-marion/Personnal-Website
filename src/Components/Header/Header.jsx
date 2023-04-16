import { NavLink /*Link*/ } from "react-router-dom";
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
            <li className={styles.hamburgerMenuLinks}>
              <NavLink
                to={"/home"}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? styles.isActiveMenu : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.hamburgerMenuLinks}>
              <NavLink
                to={"/cv"}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? styles.isActiveMenu : ""
                }
              >
                CV
              </NavLink>
            </li>
            <li className={styles.hamburgerMenuLinks}>
              <NavLink
                to={"/portfolio"}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? styles.isActiveMenu : ""
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className={styles.hamburgerMenuLinks}>
              <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? styles.isActiveMenu : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
        <ul className={styles.links}>
          <li>
            <NavLink
              to={"/home"}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? styles.isActive : ""
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

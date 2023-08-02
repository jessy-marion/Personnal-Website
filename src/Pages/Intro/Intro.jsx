import styles from "./Intro.module.scss";
import { Link } from "react-router-dom";
import art from "../../assets/img/art.webp";
import { useRef, useLayoutEffect } from "react";
const gsap = window.gsap;

function Intro() {
  // eslint-disable-next-line
  const refs = {
    title: useRef(null),
    subtitle: useRef(null),
    link: useRef(null),
  };

  console.log(refs.title.current);

  useLayoutEffect(() => {
    gsap.to(refs.title.current, {
      delay: 1.5,
      top: 0,
      opacity: 1,
      duration: 2,
    });
    gsap.to(refs.subtitle.current, {
      delay: 3.5,
      top: 0,
      opacity: 1,
      duration: 2,
    });
    gsap.to(refs.link.current, {
      delay: 5.5,
      opacity: 1,
      duration: 4,
    });
  }, [refs]);

  return (
    <div className={styles.screen}>
      <img src={art} alt={"art"} className={styles.art}></img>
      <div className={styles.titleContainer}>
        <h1 ref={refs.title} className={styles.introAnim}>
          <span>J</span>essy <span>M</span>arion
        </h1>
        <p ref={refs.subtitle} className={styles.introAnim}>
          Junior Web Developer
        </p>
      </div>
      <Link ref={refs.link} to={"/home"} className={styles.link}>
        Entrer
      </Link>
    </div>
  );
}

export default Intro;

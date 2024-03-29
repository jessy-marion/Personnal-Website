import styles from "./Progressbar.module.scss";
import { useLayoutEffect, useRef } from "react";
const gsap = window.gsap;

function Progressbar({ lvl }) {
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(progressRef.current, {
      duration: 3,
      width: `${lvl}%`,
      scrollTrigger: {
        trigger: progressRef.current,
        start: "top bottom",
      },
    });
  }, [lvl]);

  return (
    <div className={styles.bar}>
      <div
        ref={progressRef}
        className={styles.progress}
        /*style={{ width: lvl + "%" }}*/
      ></div>
    </div>
  );
}

export default Progressbar;

import styles from "./Pointer.module.scss";
import { useState, useEffect, useRef } from "react";

function Pointer() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  // eslint-disable-next-line
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
  ];

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors]);

  useEffect(() => {
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;
      console.log(circlesRef);

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${
          (circlesRef.current.length - index) / circlesRef.current.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, [coords]);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className={styles.circle}
        />
      ))}
    </>
  );
}

export default Pointer;

// warning !!!!! sup le console log et commit :) Le cursor follower ne fonctionne pas

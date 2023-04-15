import styles from "./Card.module.scss";
function Card({ children, image, h2, alt }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={alt} />
      <h2>{h2}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Card;

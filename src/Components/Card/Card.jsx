import styles from "./Card.module.scss";
function Card({ props, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h2>test</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        aspernatur, consequatur deleniti dolorem dolorum fuga odit officiis
        soluta tempora unde.
      </p>
    </div>
  );
}

export default Card;

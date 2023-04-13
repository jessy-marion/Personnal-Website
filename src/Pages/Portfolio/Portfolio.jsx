import Card from "../../Components/Card/Card";
import styles from "./Portfolio.module.scss";
import p1Img from "../../assets/img/p1.PNG";
import p2Img from "../../assets/img/p2.PNG";
import p3Img from "../../assets/img/p3.PNG";
import p4Img from "../../assets/img/p4.PNG";
import p5Img from "../../assets/img/p5.png";
import p6Img from "../../assets/img/p6.PNG";
import p7Img from "../../assets/img/R quality.png";

function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.cardContainer}>
        <Card image={p7Img} />
        <Card image={p6Img} />
        <Card image={p5Img} />
        <Card image={p4Img} />
        <Card image={p3Img} />
        <Card image={p2Img} />
        <Card image={p1Img} />
      </div>
    </main>
  );
}

export default Portfolio;

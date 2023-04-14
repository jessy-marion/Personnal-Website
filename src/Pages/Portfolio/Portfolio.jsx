import Card from "../../Components/Card/Card";
import styles from "./Portfolio.module.scss";
import p1Img from "../../assets/img/p1.PNG";
import p2Img from "../../assets/img/p2.PNG";
import p3Img from "../../assets/img/p3.PNG";
import p4Img from "../../assets/img/p4.PNG";
import p5Img from "../../assets/img/p5.PNG";
import p6Img from "../../assets/img/p6.PNG";
import p7Img from "../../assets/img/R quality.png";

function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.cardContainer}>
        <Card h2={"Air quality Project"} image={p7Img}>
          (Coming soon...) Dernier projet en date : Une application web qui
          donne l'indice de qualité de l'air, en direct, d'un lieu choisi.
          Réalisé avec React <i className="fa-brands fa-react"></i>.
        </Card>
        <Card h2={"Kasa"} image={p6Img}>
          Création, à partir d'une maquette Figma, de la partie front-end d'un
          site d'hébergement. Réalisé avec React{" "}
          <i className="fa-brands fa-react"></i>.
        </Card>
        <Card h2={"Piiquante / Hot Takes"} image={p5Img}>
          Création d'une API sécurisée pour une application d'avis
          gastronomique. Utilisation d'une base de donnée noSQL. Réalisé avec
          Node.js, Express.js et mongoDB{" "}
          <i className="fa-brands fa-node-js"></i>.
        </Card>
        <Card h2={"Kanap"} image={p4Img}>
          Conception d'un site de E-commerce qui a pour articles des canapés.
          Réalisé avec du Javascript vanilla{" "}
          <i className="fa-brands fa-square-js"></i>
        </Card>
        <Card h2={"La panthère"} image={p3Img}>
          Optimisation SEO du site d'une agence web. Amélioration de l'UX.
        </Card>
        <Card h2={"Ohmyfood"} image={p2Img}>
          Réalisation, à partir d'une maquette, de la partie intégration d'un
          site de réservation de menus pour divers restaurants. Réalisé avec
          HTML et SASS. <i className="fa-brands fa-html5"></i>{" "}
          <i className="fa-brands fa-sass"></i>
        </Card>
        <Card h2={"Booki"} image={p1Img}>
          Intégration d'un site d'hébergement dans l'esprit de "airbnb". Réalisé
          en HTML et CSS <i className="fa-brands fa-html5"></i>{" "}
          <i className="fa-brands fa-css3-alt"></i>
        </Card>
      </div>
    </main>
  );
}

export default Portfolio;

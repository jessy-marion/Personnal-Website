import Card from "../../Components/Card/Card";
import styles from "./Portfolio.module.scss";
import p1Img from "../../assets/img/p1.PNG";
import p2Img from "../../assets/img/p2.PNG";
import p3Img from "../../assets/img/p3.PNG";
import p4Img from "../../assets/img/p4.PNG";
import p5Img from "../../assets/img/p5.PNG";
import p6Img from "../../assets/img/p6.PNG";
import p7Img from "../../assets/img/R quality.png";
import p8Img from "../../assets/img/SitePerso.PNG";
import p9Img from "../../assets/img/dices-master.PNG";
import p10Img from "../../assets/img/list-app.PNG";

function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <h1>Portfolio :</h1>
      <div className={styles.cardContainer}>
        <a href="https://airquality-project.netlify.app/">
          <Card
            h2={"Air quality Project"}
            image={p7Img}
            alt={"projet air quality"}
          >
            Une application web qui donne l'indice de qualité de l'air d'un lieu
            choisi. <strong>Réalisé avec React et l'API OpenWeather.</strong>
          </Card>
        </a>
        <a href="https://spiffy-sundae-6b09de.netlify.app/">
          <Card h2={"List App"} image={p10Img} alt={"List app"}>
            Application CRUD de style annuaire. Enregistrement, modification,
            suppression d'un utilisateur. <strong>Réalisé avec React.</strong>
          </Card>
        </a>
        <a href="https://dices-master.netlify.app/">
          <Card h2={"Dices Master"} image={p9Img} alt={"Dices Master"}>
            Outil permettant de faire des lancés de dés. Notamment pour des jeux
            de rôle tel que Donjons & Dragons.{" "}
            <strong>Javascript vanilla, HTML, CSS.</strong>
          </Card>
        </a>

        <a href="https://zingy-baklava-fd3702.netlify.app/">
          <Card h2={"Kasa"} image={p6Img} alt={"projet Kasa"}>
            Création, à partir d'une maquette Figma, de la partie front-end d'un
            site d'hébergement.{" "}
            <strong>Réalisé avec React et React router V6.</strong>
          </Card>
        </a>
        <Card
          h2={"Piiquante / Hot Takes"}
          image={p5Img}
          alt={"projet Piiquante"}
        >
          Création d'une API sécurisée pour une application d'avis
          gastronomique. Utilisation d'une base de donnée noSQL.{" "}
          <strong>Réalisé avec Node.js, Express.js et mongoDB.</strong>
        </Card>
        <Card h2={"Kanap"} image={p4Img} alt={"projet Kanap"}>
          Conception d'un site de E-commerce qui a pour articles des canapés.{" "}
          <strong>Réalisé avec du Javascript vanilla.</strong>
        </Card>
        <a href="https://jessy-marion.github.io/P4-La-panthere/">
          <Card h2={"La panthère"} image={p3Img} alt={"projet La panthère"}>
            Optimisation SEO du site d'une agence web. Amélioration de l'UX.{" "}
            <strong>Utilisation de Lighthouse, Wave et GTmetrix.</strong>
          </Card>
        </a>
        <a href="https://jessy-marion.github.io/P3-Ohmyfood/">
          <Card h2={"Ohmyfood"} image={p2Img} alt={"projet Ohmyfood"}>
            Réalisation, à partir d'une maquette, de la partie intégration d'un
            site de réservation de menus pour divers restaurants.{" "}
            <strong> Réalisé avec HTML et SASS.</strong>
          </Card>
        </a>
        <a href="https://jessy-marion.github.io/P2-Booki/">
          <Card h2={"Booki"} image={p1Img} alt={"Booki"}>
            Intégration d'un site d'hébergement dans l'esprit de "airbnb".{" "}
            <strong>Réalisé en HTML et CSS.</strong>
          </Card>
        </a>
        <a href="https://www.jessy-marion.info">
          <Card h2={"Site Perso"} image={p8Img} alt={"projet Site Perso"}>
            Création de A à Z de mon site perso du code à la mise en ligne.{" "}
            <strong>Utilisation de React, React router V6 et GSAP</strong>
          </Card>
        </a>
      </div>
    </main>
  );
}

export default Portfolio;

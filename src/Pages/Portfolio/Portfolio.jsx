import Card from "../../Components/Card/Card";
import styles from "./Portfolio.module.scss";
import { NavLink /*Link*/} from "react-router-dom";
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
import p11Img from "../../assets/img/pphp.PNG";
import p12Img from "../../assets/img/mescourses.PNG";
import p13Img from "../../assets/img/landing-page-1.PNG";
import p14Img from "../../assets/img/fizzBuzz.PNG";
import p15Img from "../../assets/img/CaptureCalculator.PNG";
import p16Img from "../../assets/img/TSSR.jpg";

function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.cardContainer}>
      <NavLink
            to={"/tssr"}
        >
          <Card
              h2={"TSSR"}
              image={p16Img}
              alt={"TSSR"}
          >
            Dossier professionnel réalisé dans le cadre de ma formation TSSR (Technicien Supérieur Systèmes et Reseaux). <strong>GLPI, Windows Server, Linux...</strong>
          </Card>
        </NavLink>
      <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://thriving-axolotl-e8b0a7.netlify.app/"
        >
          <Card
              h2={"Calculator"}
              image={p15Img}
              alt={"calculator"}
          >
            Calculatrice dans l'esprit Abatron, fonctionnalités en cours d'intégration. <strong>Réalisé avec React + Typescript.</strong>
          </Card>
        </a>
        <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://playful-florentine-b8c11a.netlify.app/"
        >
          <Card
              h2={"Landing Page pour Music App"}
              image={p13Img}
              alt={"Landing Page"}
          >
            Landing Page responsive pour une application de musique fictive. <strong>Réalisé avec Tailwind CSS et javascript vanilla.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://airquality-project.netlify.app/"
        >
          <Card
            h2={"Air quality Project"}
            image={p7Img}
            alt={"projet air quality"}
          >
            Une application web qui donne l'indice de qualité de l'air d'un lieu
            choisi. <strong>Réalisé avec React et l'API OpenWeather.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://verdant-taiyaki-d4bdb1.netlify.app/"
        >
          <Card
            h2={"Mes Courses"}
            image={p12Img}
            alt={"Mes Courses"}
          >
            Application CRUD reliée à un serveur Mock. Réception, envoi, modification, suppression de données persistantes.
            <strong> Réalisé avec React, Tailwind CSS, Mock API.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://spiffy-sundae-6b09de.netlify.app/"
        >
          <Card h2={"List App"} image={p10Img} alt={"List app"}>
            Application CRUD de style annuaire. Enregistrement, modification,
            suppression d'un utilisateur. <strong>Réalisé avec React.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://dices-master.netlify.app/"
        >
          <Card h2={"Dices Master"} image={p9Img} alt={"Dices Master"}>
            Outil permettant de faire des lancés de dés. Notamment pour des jeux
            de rôle tel que Donjons & Dragons.{" "}
            <strong>Javascript vanilla, HTML, CSS.</strong>
          </Card>
        </a>{" "}
        <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://657499c1648ed7014e177176--delightful-conkies-0cfc95.netlify.app/"
        >
          <Card h2={"Fizz Buzz"} image={p14Img} alt={"Fizz buzz"}>
            Entrainement pour tests techniques. <strong>Réalisé en javascript.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/jessy-marion/TODO_with_PHP"
        >
          <Card h2={"TODO with PHP"} image={p11Img} alt={"TODO with PHP"}>
            Projet permettant l'apprentissage du language PHP et certaines
            notions de backend. <strong>Réalisé en PHP.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://zingy-baklava-fd3702.netlify.app/"
        >
          <Card h2={"Kasa"} image={p6Img} alt={"projet Kasa"}>
            Création, à partir d'une maquette Figma, de la partie front-end d'un
            site d'hébergement.{" "}
            <strong>Réalisé avec React et React router V6.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/jessy-marion/P6-PIIQUANTE"
        >
          <Card
            h2={"Piiquante / Hot Takes"}
            image={p5Img}
            alt={"projet Piiquante"}
          >
            Création d'une API sécurisée pour une application d'avis
            gastronomique. Utilisation d'une base de donnée noSQL.{" "}
            <strong>Réalisé avec Node.js, Express.js et mongoDB.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/jessy-marion/P5-Kanap"
        >
          <Card h2={"Kanap"} image={p4Img} alt={"projet Kanap"}>
            Conception d'un site de E-commerce qui a pour articles des canapés.{" "}
            <strong>Réalisé avec du Javascript vanilla.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jessy-marion.github.io/P4-La-panthere/"
        >
          <Card h2={"La panthère"} image={p3Img} alt={"projet La panthère"}>
            Optimisation SEO du site d'une agence web. Amélioration de l'UX.{" "}
            <strong>Utilisation de Lighthouse, Wave et GTmetrix.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jessy-marion.github.io/P3-Ohmyfood/"
        >
          <Card h2={"Ohmyfood"} image={p2Img} alt={"projet Ohmyfood"}>
            Réalisation, à partir d'une maquette, de la partie intégration d'un
            site de réservation de menus pour divers restaurants.{" "}
            <strong> Réalisé avec HTML et SASS.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://jessy-marion.github.io/P2-Booki/"
        >
          <Card h2={"Booki"} image={p1Img} alt={"Booki"}>
            Intégration d'un site d'hébergement dans l'esprit de "airbnb".{" "}
            <strong>Réalisé en HTML et CSS.</strong>
          </Card>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.jessy-marion.info"
        >
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

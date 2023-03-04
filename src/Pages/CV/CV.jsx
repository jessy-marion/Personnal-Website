import styles from "./CV.module.scss";
import img from "../../assets/img/face-picture.jpg";
import Progressbar from "../../Components/Progressbar/Progressbar";

function CV() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.name} {/*b1*/}`}>Jessy Marion</h1>
      <img src={img} alt="Jessy Marion" />
      <section className={`${styles.profil} {/*b2*/}`}>
        <div className={styles.infoContainer}>
          <h2>Profil</h2>
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <span>Adresse</span> <br />
              140 chemin de font Freye, 06750, Andon
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>E-mail</span> <br />
              <a href="mailto:jessymarionmail@gmail.com">
                jessymarionmail@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>Telephone</span> <br />
              07 68 65 27 45
            </li>
            <li>
              <i className="fa-solid fa-cake-candles"></i>
              <span>Date de naissance</span> <br />
              23/02/1991
            </li>
            <li>
              <i className="fa-solid fa-car"></i>
              <span>Permis</span> <br />
              Permis B
            </li>
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h2>Loisirs</h2>
          <ul>
            <li>
              <i className="fa-solid fa-guitar"></i>
              <span>Musique</span> <br />
              Musicien multi-instrumentiste, je pratique divers instruments tels
              que la guitare, la batterie, le synthétiseur. J'ai des
              connaissances en M.A.O. Je suis aussi collectionneur de vinyles.
            </li>
            <li>
              <i className="fa-solid fa-film"></i>
              <span>Cinéma</span> <br />
              Passionné de cinéma. J'ai des connaissances en montage vidéo et
              notamment les logiciels Adobe premiere pro et Davinci Resolve.
            </li>
            <li>
              <i className="fa-solid fa-gamepad"></i>
              <span>Rétro-gaming</span> <br />
              Passion depuis mon plus jeune age.
            </li>
            <li>
              <i className="fa-solid fa-computer"></i>
              <span>Informatique</span> <br />
              J'ai des connaissances en informatique hardware et software
            </li>
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h2>Compétences</h2>
          <ul>
            <li>
              <i className="fa-brands fa-html5"></i>{" "}
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-sass"></i>
              <span>HTML/CSS/SASS</span> <br />
              <Progressbar />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, omnis!
            </li>
            <li>
              <i className="fa-brands fa-square-js"></i>
              <span>Javascript</span> <br />
              <Progressbar />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              nulla!
            </li>
            <li>
              <i className="fa-brands fa-react"></i>
              <span>React</span> <br />
              <Progressbar />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              temporibus?
            </li>
            <li>
              <i className="fa-brands fa-node-js"></i>
              <span>Node.js</span> <br />
              <Progressbar />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, perferendis!
            </li>
            <li>
              <span>Mongodb</span> <br />
              <Progressbar />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, perferendis!
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.formation}`}>
        <div className={styles.formationsContainer}>
          <h2>Formations</h2>
          <div className={styles.indivFormation}>
            <h3 className={styles.diplome}>
              <i className="fa-solid fa-user-graduate"></i>Diplôme : Développeur
              web (niv.III)
            </h3>
            <p className={styles.dates}>Juillet 2022 à Fevrier 2023</p>
            <p className={styles.organisme}>Openclassrooms</p>
            <ul className={styles.puce}>
              <li>Formation à distance</li>
              <li>
                Consolidation des mes connaissances HTML / CSS / Javascript
              </li>
              <li>Découverte et apprentissage de Node.js, mongoDB et React</li>
              <li>Cours et projet en SEO</li>
              <li>Six projets ont été réalisé durant cette formation</li>
            </ul>
          </div>
          <div className={styles.indivFormation}>
            <h3 className={styles.diplome}>
              <i className="fa-solid fa-user-graduate"></i>Apprentissage des
              technologies du web
            </h3>
            <p className={styles.dates}>Janvier 2020 à aujourd'hui</p>
            <p className={styles.organisme}>Dyma</p>
            <ul className={styles.puce}>
              <li>
                Base du développement web découverte du HTML / CSS / Javascript
              </li>
              <li>Cours sur git et GitHub</li>
              <li>
                Apprentissage des commandes Bash et utilisation d'un
                environnement sous Linux
              </li>
            </ul>
          </div>
          <div className={styles.indivFormation}>
            <h3 className={styles.diplome}>
              <i className="fa-solid fa-user-graduate"></i>Diplôme :
              Baccalauréat Littéraire
            </h3>
            <p className={styles.dates}>Septembre 2019 à Juin 2020</p>
            <p className={styles.organisme}>
              université picardie jules verne (80)
            </p>
            <ul className={styles.puce}>
              <li>Obtenu avec mention bien</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CV;

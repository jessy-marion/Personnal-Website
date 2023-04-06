import { useLayoutEffect, useRef } from "react";
import styles from "./Home.module.scss";
import profileImg from "../../assets/img/male-avatar.gif";
import codeImg from "../../assets/img/codeur.gif";
import goalImg from "../../assets/img/target-evaluation.gif";
const gsap = window.gsap;
// eslint-disable-next-line no-unused-vars
//const scrollTrigger = window.ScrollTrigger;

function Home() {
  //voir probleme plus bas
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refs = {
    firstImgRef: useRef(null),
    secondImgRef: useRef(null),
    thirdImgRef: useRef(null),
    firsth2Ref: useRef(null),
    secondh2Ref: useRef(null),
    thirdh2Ref: useRef(null),
    firstParaRef: useRef(null),
    secondParaRef: useRef(null),
    thirdParaRef: useRef(null),
  };

  /* const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);*/

  //console.log(scrollTrigger.isInViewport);

  useLayoutEffect(() => {
    //essayer d'optimiser au max !!!
    //img
    gsap.to(refs.firstImgRef.current, {
      left: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.firstImgRef.current,
    });
    gsap.to(refs.secondImgRef.current, {
      right: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.secondImgRef.current,
    });
    gsap.to(refs.thirdImgRef.current, {
      left: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.thirdImgRef.current,
    });

    //h2
    gsap.to(refs.firsth2Ref.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.firsth2Ref.current,
    });
    gsap.to(refs.secondh2Ref.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.secondh2Ref.current,
    });
    gsap.to(refs.thirdh2Ref.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.thirdh2Ref.current,
    });

    //p
    gsap.to(refs.firstParaRef.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.firstParaRef.current,
    });
    gsap.to(refs.secondParaRef.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.secondParaRef.current,
    });
    gsap.to(refs.thirdParaRef.current, {
      bottom: 0,
      opacity: 1,
      duration: 2.3,
      scrollTrigger: refs.thirdParaRef.current,
    });
  }, [refs]);

  return (
    <main className={styles.main}>
      <h1>Présentation</h1>
      <section>
        <img
          ref={refs.firstImgRef}
          src={profileImg}
          alt="Profile"
          className={styles.left}
        />
        <div>
          <h2 ref={refs.firsth2Ref}>Qui suis je ?</h2>
          <p ref={refs.firstParaRef}>
            Salut 👋
            <br />
            <br />
            Je m'appelle Jessy ! Musicien multi-instrumentiste, passionné de
            musique et d'informatique. Depuis 2020, je me forme en autodidacte
            au développement web. J'ai acquis de solides connaissances dans les
            langages du web front-end que sont HTML / CSS / Javascript. Je viens
            d'achever la formation Openclassrooms "developpeur web" et je
            souhaite faire une alternance afin de consolider mes connaissances
            dans la stack front-end.
          </p>
        </div>
      </section>
      <section>
        <img
          ref={refs.secondImgRef}
          src={codeImg}
          alt="Motivation"
          className={styles.right}
        />
        <div>
          <h2 ref={refs.secondh2Ref}>Pourquoi le code ?</h2>
          <p ref={refs.secondParaRef}>
            L'informatique est un domaine dans lequel je m'épanouis totalement
            et c'est pour ça que j'ai décidé de m'investir dans le code.
            Adolescent, j'avais déjà essayé d'apprendre le language C mais les
            aléas de la vie on fait que je n'ai pas pu approfondir ce domaine.
            Mais un jour de confinement, j'ai fait quelques leçons de
            developpement web du site Freecodecamp et là me fut embarqué dans
            une spirale infernal et j'ai enchainé les cours dans ce domaine !
            Etant musicien je trouve qu'il y a une similitude entre le dev et la
            musique, le fait de coder un projet est comparable à écrire une
            composition, c'est un process qui fait travailler notre créativité
            et qui nous mets dans une bulle. <br />
            J'ai ensuite décidé de synthétiser/valider mes connaissances avec la
            formation d'Openclassrooms. Elle m'aura permis de confirmer que le
            developemment était le domaine dans lequel je voulais me
            professionnaliser.
          </p>
        </div>
      </section>
      <section>
        <img
          ref={refs.thirdImgRef}
          src={goalImg}
          alt="Goal"
          className={styles.left}
        />
        <div>
          <h2 ref={refs.thirdh2Ref}> Objectifs</h2>
          <p ref={refs.thirdParaRef}>
            Je souhaiterai, par le biais d'une alternance, approfondir mes
            connaissances mais aussi découvrir la réalité professionnel. Voir
            comment se structure une entreprise dans le milieu de
            l'informatique. Bien sur, cette alternance me permettra de renforcer
            mon experience et du coup mon employabilité. Mais en attendant ce
            moment, je continue de me former dans les technologies du web et
            particulièrement React.js ⚛️ et de réaliser des projets tels que ce
            site ici présent ou bien le futur projet en cours de gestation :
            AirQuality, une application qui vous donne un indice de la qualité
            de l'air selon l'endroit voulu.
            <br />
            <br />
            Au plaisir d'échanger avec vous prochainement,
            <br />
            <br />
            Jessy Marion
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

// Todo: essayer d'optimiser les animations !!

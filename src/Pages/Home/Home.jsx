import { useLayoutEffect, useRef } from "react";
import styles from "./Home.module.scss";
import codeImg from "../../assets/img/codeur.gif";
import goalImg from "../../assets/img/target-evaluation.gif";
import profileImg from "../../assets/img/me.jpg";
const gsap = window.gsap;

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

  useLayoutEffect(() => {
    //essayer d'optimiser au max !!!
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
          <h2 ref={refs.firsth2Ref}>Une petite présentation ? </h2>
          <p ref={refs.firstParaRef}>
            Salut 👋
            <br />
            <br />
            Je m'appelle Jessy ! Musicien multi-instrumentiste et apprenti
            codeur, passionné de musique et d'informatique. J'ai décidé de créer
            ce site afin que vous puissiez en apprendre d'avantage sur moi et
            voir les différents projets que j'ai réalisé. Depuis 2020, je me
            forme en autodidacte au développement web. J'ai acquis de solides
            connaissances dans les langages du web front-end que sont HTML / CSS
            / Javascript. Je viens d'achever une formation "développeur web" de
            niveau V et je souhaite faire une alternance afin de consolider mes
            connaissances dans la stack front-end.
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
            L'informatique est un domaine dans lequel je m'épanouis depuis
            l'enfance. Adolescent, j'avais déjà essayé d'apprendre le language C
            mais les aléas de la vie on fait que je n'ai pas pu approfondir ce
            domaine. Plus tard, j'ai fait quelques cours de code sur le site
            Freecodecamp et là je fus embarqué dans une spirale infernale et il
            m'était difficile d'arrêter ! Etant musicien je trouve qu'il y a une
            similitude entre le dev et la musique, le fait de coder un projet
            est comparable à écrire une composition, c'est un process qui nous
            pousse à être créatif et qui nous mets dans une bulle. <br />
            J'ai ensuite décidé de synthétiser mes connaissances avec la
            formation d'OpenClassrooms. Elle m'aura permis de confirmer que le
            développement informatique était le domaine dans lequel je voulais
            travailler.
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
            connaissances mais aussi découvrir la réalité professionnelle. Voir
            comment se structure une entreprise dans ce milieu et ajouter ma
            pierre à l'édifice de projets d'envergure ! Bien sur, cette
            alternance me permettra de renforcer mon experience et de ce fait
            mon employabilité future. Mais en attendant ce moment, je continue
            de me former dans les technologies du web, particulièrement React.js
            et de réaliser des projets tel que le site sur lequel vous naviguez.
            Mon dernier projet : AirQuality, une application qui vous donne un
            indice de la qualité de l'air selon l'endroit choisi.
            <br />
            <br />
            Au plaisir d'échanger avec vous prochainement.
            <br />
            <br />
            <strong>Jessy Marion</strong>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

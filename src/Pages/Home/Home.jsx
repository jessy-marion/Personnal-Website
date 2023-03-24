import { useLayoutEffect, useRef } from "react";
import styles from "./Home.module.scss";
import profileImg from "../../assets/img/profile.png";
import motivationImg from "../../assets/img/motivation.png";
import goalImg from "../../assets/img/goal.png";
const gsap = window.gsap;
const scrollTrigger = window.ScrollTrigger;

function Home() {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
            animi consequatur, dicta error est eveniet expedita facere iste
            magni nam odio quam repellendus ut velit! Alias aliquam aliquid
            asperiores autem cum cumque deserunt dignissimos distinctio dolorem
            dolores eos, esse est et ex excepturi exercitationem fuga fugit
            harum id illo ipsa ipsam iure libero maiores molestias mollitia
            necessitatibus nisi nobis nostrum perspiciatis quaerat quam quos
            recusandae repellat repudiandae, sequi totam! Asperiores atque culpa
            debitis deserunt dolor doloremque dolores enim id incidunt laborum
            magni, maiores minima mollitia necessitatibus nostrum, odio officia
            officiis perferendis provident rem repudiandae sed sunt! Ab aliquid,
            qui.
          </p>
        </div>
      </section>
      <section>
        <img
          ref={refs.secondImgRef}
          src={motivationImg}
          alt="Motivation"
          className={styles.right}
        />
        <div>
          <h2 ref={refs.secondh2Ref}>Pourquoi le code ?</h2>
          <p ref={refs.secondParaRef}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
            atque consequatur cupiditate, dolorem doloremque ea earum id impedit
            in ipsa laborum magnam minima nisi provident, quae quas suscipit
            tempore vel velit. Ducimus ex expedita nesciunt nihil officiis
            quasi, voluptates? Dolor eveniet explicabo impedit ipsam ipsum iste
            iusto modi nulla numquam, placeat porro provident, quidem, veniam!
            Ab animi, aut autem debitis deserunt eius enim eum inventore laborum
            magnam minus mollitia nesciunt nisi non odit officia officiis quae
            reprehenderit similique sunt. Accusantium amet aperiam commodi esse
            facilis harum hic id labore laborum modi nemo odit officiis
            provident quos ratione sapiente soluta, totam ut. Dicta ratione
            suscipit voluptatibus!
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
            amet consectetur cum cumque dolore dolorem earum esse ex expedita,
            harum id illum ipsam ipsum labore laboriosam magni non officia omnis
            quos ratione reiciendis rerum saepe sit sunt suscipit vel! Ab ad
            assumenda beatae exercitationem facere id minima minus neque.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

// Todo: essayer d'optimiser les animations !!

import { useLayoutEffect, useRef } from "react";
import styles from "./Home.module.scss";
import profileImg from "../../assets/img/profile.png";
import motivationImg from "../../assets/img/motivation.png";
import goalImg from "../../assets/img/goal.png";
const gsap = window.gsap;
//const scrollTrigger = window.ScrollTrigger;

function Home() {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(leftImgRef.current, {
      //x: 100,
      duration: 2,
      scrollTrigger: {
        trigger: leftImgRef.current,
        start: "top bottom",
      },
    });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Présentation</h1>
      <section>
        <img ref={leftImgRef} src={profileImg} alt="Profile" />
        <div>
          <h2>Qui suis je ?</h2>
          <p>
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
        <img ref={rightImgRef} src={motivationImg} alt="Motivation" />
        <div>
          <h2>Pourquoi le code ?</h2>
          <p>
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
        <img ref={leftImgRef} src={goalImg} alt="Goal" />
        <div>
          <h2> Objectifs</h2>
          <p>
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

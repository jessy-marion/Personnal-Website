import styles from "./CV.module.scss";
import Button from "../../Components/Button/Button";
import pdf from "../../datas/pdf/CV_Jessy_Marion.pdf";

function CV() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} {/*b1*/}`}>Curriculum vitae</h1>
      <h2>"Voici mon CV au format PDF"</h2>
      <br />
      <Button pdf={pdf}>Télécharger le CV</Button>
    </main>
  );
}

export default CV;

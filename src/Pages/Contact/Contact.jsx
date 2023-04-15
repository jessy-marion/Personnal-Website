import Form from "../../Components/Form/Form";
import styles from "./Contact.module.scss";
import mailIcon from "../../assets/img/gmail.png";
import linkedinIcon from "../../assets/img/linkedin.png";
import gitHubIcon from "../../assets/img/github-mark-white.png";

// eslint-disable-next-line no-unused-vars

function Contact() {
  return (
    <main className={styles.main}>
      <Form />
      <div className={styles.links}>
        <a href="mailto:jessymarionmail@gmail.com">
          <img src={mailIcon} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/jessy-marion/">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/jessy-marion">
          <img src={gitHubIcon} alt="GitHub" />
        </a>
      </div>
    </main>
  );
}

export default Contact;

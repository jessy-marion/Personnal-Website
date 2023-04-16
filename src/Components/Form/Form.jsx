import styles from "./Form.module.scss";
//import Button from "../Button/Button";
function Form() {
  return (
    <div className={styles.formContainer}>
      <h1>Contactez-moi :</h1>
      <form
        name="contact"
        method="post"
        className={styles.form}
        netlify
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Nom : </label>
        <input type="text" name="name" placeholder="Nom" />

        <label htmlFor="email">Email : </label>
        <input type="email" name="email" placeholder="Email" />

        <label htmlFor="message">Message : </label>
        <textarea name="message" placeholder="Message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;

import styles from "./Button.module.scss";

function Button({ children, pdf }) {
  function handleClick() {
    pdf &&
      fetch(pdf).then((res) => {
        res.blob().then((blob) => {
          const fileUrl = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileUrl;
          alink.download = "CV_Jessy_Marion.pdf";
          alink.click();
        });
      });
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;

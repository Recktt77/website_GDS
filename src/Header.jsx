import styles from "./css/Header.module.css";
import logoBlue from "./assets/logoBlue.jpg";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={logoBlue} width={77} height={61} />
        <a href="https://astana.citypass.kz/ru/">
          <button className={styles.buttonToOff}>
            <span>Go to Official website</span>
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;

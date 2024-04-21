import styles from "./css/Header.module.css";

export default function HeadInfo() {
  return (
    <>
      <div className={styles.theme}>
        <h1>
          <span className={styles.textStyle}>
            Shyraq: modern telegram helper for signseeing
          </span>
        </h1>
      </div>
      <h1 className={styles.themeMob}>
        <span>Shyraq: modern telegram helper for signseeing</span>
      </h1>
      <h3>
        <span style={{ color: "#419fd9" }}>
          Welcome to our Telegram bot dedicated to helping you explore the
          sights of Astana! Whether you're a visitor or a local looking for new
          experiences, our bot is your friendly guide to discovering the vibrant
          culture, history, and attractions of Kazakhstan's capital city.
        </span>
      </h3>
    </>
  );
}

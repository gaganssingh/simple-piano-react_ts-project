import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://gagan.site/">Gagan Singh</a>
      <br />
      {currentYear}
    </footer>
  );
};

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.details}>
        <img
          src='./images/logo.svg'
          className={styles.logo}
          alt='Ultimate Tech logo'
        />

        <small className={styles.small}>&copy; 2023, UltimateTech</small>
        <a href='/'>Contact Us</a>
      </section>
    </footer>
  );
};

export default Footer;

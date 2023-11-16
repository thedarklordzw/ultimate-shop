import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.details}>
        <a href='/'>
          <img
            src='./images/logo.svg'
            className={styles.logo}
            alt='Ultimate Tech logo'
          />
        </a>
        <small className={styles.small}>
          Copyright &copy; 2023 UltimateTech. All Rights Reserved.
        </small>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.'
          className={styles.contact}
        >
          Contact Us
        </a>
      </section>
    </footer>
  );
};

export default Footer;

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src='./images/logo.svg'
          className={styles.logo}
          alt='Ultimate Tech logo'
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a href='/'>Explore</a>
          </li>

          <li>
            <a href='/' className={styles.orders}>
              Orders
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

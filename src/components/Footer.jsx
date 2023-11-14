import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Ultimate Tech ZW</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a href='/'>Shop</a>
          </li>
          <li>
            <a href='/'>Explore</a>
          </li>
          <li>
            <a href='/'>Cart</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

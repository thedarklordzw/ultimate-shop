import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;

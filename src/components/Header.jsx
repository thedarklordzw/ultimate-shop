import styles from './Header.module.css';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

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
        <div className={styles.menu}>
          <HamburgerMenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;

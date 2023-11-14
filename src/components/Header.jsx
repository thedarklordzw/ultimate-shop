import styles from './Header.module.css';
import Menu from '../assets/menu.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/'>
        <img
          src='./images/logo.svg'
          className={styles.logo}
          alt='Ultimate Tech logo'
        />
      </a>
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

        <img src={Menu} alt='Menu icon' className={styles.menu} />
      </nav>
    </header>
  );
};

export default Header;

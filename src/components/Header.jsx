import styles from './Header.module.css';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Header = props => {
  // eslint-disable-next-line react/prop-types
  const { modalHandler } = props;

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
            <a
              href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.'
              className={styles.orders}
            >
              Orders
            </a>
          </li>
        </ul>

        <button className={styles.icon} onClick={modalHandler}>
          <HamburgerMenuIcon className={styles.menu} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

import styles from './Modal.module.css';

import { Cross1Icon } from '@radix-ui/react-icons';

const Modal = props => {
  // eslint-disable-next-line react/prop-types
  const { modalHandler } = props;
  console.log(props);

  return (
    <div className={styles.modal}>
      <a href='/'>
        <img
          src='./images/logo.svg'
          alt='Ultimate Tech logo'
          className={styles.logo}
        />
      </a>
      <nav>
        <ul className={styles.list}>
          <li>
            <a
              href='https://chat.whatsapp.com/C4Kitj0oy9TLwou8tVic9O.
'
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.
'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.
'
            >
              Learn More
            </a>
          </li>
          <li className={styles.order}>
            <a
              href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.
'
              className={styles.orders}
            >
              Order Now &rarr;
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.icon} onClick={modalHandler}>
        <Cross1Icon className={styles.menu} />
      </button>
    </div>
  );
};

export default Modal;

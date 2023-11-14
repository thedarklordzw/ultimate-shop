import { useState } from 'react';
import styles from './Main.module.css';

const Main = () => {
  const [orderRomoss10, setOrderRomoss10] = useState({
    order: false,
    quantity: 0,
  });
  // const [orderRedmi20, setOrderRedmi20] = useState({
  //   order: false,
  //   quantity: 0,
  // });
  // const [orderRomoss60, setOrderRomoss60] = useState({
  //   order: false,
  //   quantity: 0,
  // });

  const orderRomoss10Handler = () => {
    setOrderRomoss10(prevState => {
      prevState.order = true;
      prevState.quantity = 1;
    });
    console.log(orderRomoss10);
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <img
          className={styles.img}
          src='./images/romoss20-edited.png'
          alt='Romoss PowerBank 10000mAH'
        />
        <h2 className={styles.title}>Romoss Sense Mini 10000mAh</h2>
        <ul className={styles.desc}>
          <li>10000mAh Capacity</li>
          <li>LED level indicators</li>
          <li>Micro USB & Type-C input ports</li>
        </ul>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now
        </a>
      </section>
      <section className={styles.section}>
        <img
          className={styles.img}
          src='./images/redmi-edited.png'
          alt='Redmi Powerbank 20000mAH'
        />
        <h2 className={styles.title}>Redmi 20000mAh 18W QW333e</h2>
        <ul className={styles.desc}>
          <li>20000mAh Capacity</li>
          <li>Dual Output Ports</li>
          <li>Two-way 18W Fast Charge</li>
        </ul>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Redmi%2020%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now
        </a>
      </section>
      <section className={styles.section}>
        <img
          className={styles.img}
          src='./images/romoss60-edited.png'
          alt='Romoss PowerBank 60000mAH'
        />
        <h2 className={styles.title}>Romoss Zeus 60000mAh</h2>
        <ul className={styles.desc}>
          <li>60000mAh High-capacity</li>
          <li>18W Two Way Quick Charge</li>
          <li>Huawei SCP 22.5W Super Fast Charge</li>
        </ul>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2060%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now
        </a>
      </section>
    </main>
  );
};

export default Main;

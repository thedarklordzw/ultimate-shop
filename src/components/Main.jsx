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
        <h2 className={styles.title}>
          Romoss <span className={styles.span}>10 000mAh</span>
        </h2>
        <ul className={styles.desc}>
          <li>10 000mAh Capacity</li>
          <li>LED level indicators</li>
          <li>Micro USB & Type-C input ports</li>
        </ul>
        <h3 className={styles.pricing}>$19.99</h3>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now &rarr;
        </a>
      </section>
      <section className={styles.section}>
        <div className={styles.banner}>
          <h3 className={styles.subhead}>Best Deal</h3>
        </div>
        <img
          className={styles.img}
          src='./images/redmi-edited.png'
          alt='Redmi Powerbank 20000mAH'
        />
        <h2 className={styles.title}>
          Redmi <span className={styles.span}>20 000mAh</span>
        </h2>
        <ul className={styles.desc}>
          <li>20 000mAh Capacity</li>
          <li>Dual Output Ports</li>
          <li>Two-way 18W Fast Charge</li>
        </ul>
        <h3 className={styles.pricing}>$36.99</h3>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Redmi%2020%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now &rarr;
        </a>
      </section>
      <section className={styles.section}>
        <img
          className={styles.img}
          src='./images/romoss60-edited.png'
          alt='Romoss PowerBank 60000mAH'
        />
        <h2 className={styles.title}>
          Romoss <span className={styles.span}>60 000mAh</span>
        </h2>
        <ul className={styles.desc}>
          <li>60 000mAh High-capacity</li>
          <li>18W Two Way Quick Charge</li>
          <li>Huawei SCP 22.5W Super Fast Charge</li>
        </ul>
        <h3 className={styles.pricing}>$69.99</h3>
        <a
          href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2060%20000mAH%20powerbank.'
          className={styles.btn}
          onClick={orderRomoss10Handler}
        >
          Order Now &rarr;
        </a>
      </section>
    </main>
  );
};

export default Main;

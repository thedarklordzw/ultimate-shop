import styles from './Main.module.css';

const Main = () => {
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
          <li>Compact mini power bank design</li>
          <li>10000mAh Capacity</li>
          <li>LED level indicators for % charge</li>
          <li>Charge multiple devices simultaneously</li>
          <li>Dual USB output ports</li>
          <li>Micro USB & Type-C input ports</li>
          <li>FitCharge+ technology</li>
          <li>Safer with high-quality Li-Polymer cells</li>
        </ul>
        <button className={styles.btn}>Add To Cart</button>
      </section>
      <section className={styles.section}>
        <img
          className={styles.img}
          src='./images/redmi-edited.png'
          alt='Redmi Powerbank 20000mAH'
        />
        <h2 className={styles.title}>Redmi 20000mAh 18W Fast Charge</h2>
        <ul className={styles.desc}>
          <li>20000mAh Capacity</li>
          <li>Low Power Charging Mode</li>
          <li>Dual Input Ports</li>
          <li>Dual Output Ports</li>
          <li>Two-way 18W Fast Charge</li>
          <li>Multiple Protection Features</li>
          <li>Safe for use on airplane</li>
          <li>Safer with high-quality Li-Polymer cells</li>
        </ul>
        <button className={styles.btn}>Add To Cart</button>
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
          <li>18W PD3.0+QC3.0 Two Way Quick Charge</li>
          <li>Huawei SCP 22.5W Super Fast Charge</li>
          <li>Three Inputs & Four Outputs</li>
          <li>High-Quality Battery Cells</li>
          <li>Dual Output Ports</li>
          <li>Two-way 18W Fast Charge</li>
          <li>Large Digital LED Display</li>
        </ul>
        <button className={styles.btn}>Add To Cart</button>
      </section>
    </main>
  );
};

export default Main;

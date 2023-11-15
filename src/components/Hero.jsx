import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Free Delivery!</h1>
      <p className={styles.byline}>What are you waiting for?</p>
      <a href='/' className={styles.orders}>
        Make an Order
      </a>
    </section>
  );
};

export default Hero;

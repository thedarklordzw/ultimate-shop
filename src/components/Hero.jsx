import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Get it here...</h1>
      <p className={styles.byline}>Delivered to your doorstep.</p>
    </section>
  );
};

export default Hero;

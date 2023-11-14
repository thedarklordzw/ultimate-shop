import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>The Best Tech in Town!!</h1>
      <p className={styles.byline}>Get it here, straight to your doorstep</p>
    </section>
  );
};

export default Hero;

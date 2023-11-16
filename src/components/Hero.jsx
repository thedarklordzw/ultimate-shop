import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Free Delivery!</h1>
      <p className={styles.byline}>What are you waiting for?</p>
      <a
        href='https://wa.me/263776122880?text=Hi,%20I%20want%20to%20order%20the%20Romoss%2010%20000mAH%20powerbank.'
        className={styles.orders}
      >
        Order Now &rarr;
      </a>
    </section>
  );
};

export default Hero;

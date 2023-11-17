import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Free Delivery!</h1>
      <p className={styles.byline}>What are you waiting for?</p>
      <a
        href='https://chat.whatsapp.com/C4Kitj0oy9TLwou8tVic9O'
        className={styles.orders}
      >
        Learn More &rarr;
      </a>
    </section>
  );
};

export default Hero;

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.about}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Welcome to UltimateTech!</h2>
          <p className={styles.info}>
            We offer a wide range of cutting-edge electronics and gadgets, from
            smartphones and laptops to gaming gear. Our carefully curated
            collection features top brands and high-quality products to fit
            every lifestyle. With a user-friendly website and responsive
            customer service, we ensure a seamless shopping experience for all.
            Stay ahead of the curve with our latest tech trends and elevate your
            tech game with UltimateTech!
          </p>

          <div className={styles.contact}>
            <a className={styles.orders} href='email:lathincube@gmail.com'>
              Contact Us on Instagram
            </a>
            <a className={styles.orders} href='email:lathincube@gmail.com'>
              Contact Us on Telegram
            </a>
            <a className={styles.orders} href='email:lathincube@gmail.com'>
              Send Us an Email
            </a>
            <a className={styles.orders} href='tel:+263776122880'>
              Give Us a Call
            </a>
            <a className={styles.orders} href='tel:+263776122880'>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

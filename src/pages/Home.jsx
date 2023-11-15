import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = props => {
  return (
    <>
      <Header {...props} />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Home;

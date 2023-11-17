import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Modal from './components/Modal';
import './index.css';

const ModalElement = document.getElementById('modal');

function App() {
  const [isModal, setIsModal] = useState(false);

  const modalToggleHandler = () => {
    console.log('clicked me :O');
    if (isModal) {
      setIsModal(false);
      document.body.style.overflow = 'unset';
    }

    if (!isModal) {
      setIsModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      {isModal &&
        createPortal(<Modal modalHandler={modalToggleHandler} />, ModalElement)}
      <Switch>
        <Route path='/about'>
          <About modalHandler={modalToggleHandler} />
        </Route>
        <Route path='/'>
          <Home modalHandler={modalToggleHandler} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import { createPortal } from 'react-dom';
import { useState } from 'react';
import Home from './pages/Home';
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
      <Home modalHandler={modalToggleHandler} />
    </>
  );
}

export default App;

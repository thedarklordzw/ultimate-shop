import { createPortal } from 'react-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Modal from './components/Modal';
import './index.css';

const ModalElement = document.getElementById('modal');

function App() {
  const [isModal, setIsModal] = useState(false);

  const modalToggleHandler = () => {
    setIsModal(!isModal);

    if (isModal) {
      document.body.style.overflow = 'hidden';
      console.log(isModal, true);
    } else {
      document.body.style.overflow = 'unset';
      console.log(isModal, false);
    }
  };

  return (
    <>
      {isModal && createPortal(<Modal />, ModalElement)}
      <Home modalHandler={modalToggleHandler} />
    </>
  );
}

export default App;

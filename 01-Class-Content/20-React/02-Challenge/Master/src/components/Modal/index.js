import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Modal = (props) => {
  const { onClose, currentPhoto } = props;

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{capitalizeFirstLetter(currentPhoto.name)} </h3>
        <img src={require(`../../assets/large/${currentPhoto.category}/${currentPhoto.index}.jpg`)} alt="current category" />
        <p>
          {currentPhoto.description}
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;

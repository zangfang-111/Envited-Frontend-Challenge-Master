import React from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

const customStyles = (bgColor='rgba(0, 0, 0, 0.6)') => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1002',
  },
});

Modal.setAppElement('#root');

function CustomModal({
  modalIsOpen,
  closeModal,
  children,
  backgroundColor
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles(backgroundColor)}
      className='en-custom-modal'
    >
      <span onClick={() => closeModal()} className='close-icon'>
        <GrClose />
      </span>
      {children}
    </Modal>
  );
}

export default CustomModal;

import React, { useEffect } from 'react'
import CloseButton from '../Projects/CloseButton/CloseButton';
import ProjectModalCard from './ProjectModalCard/ProjectModalCard';
import { useModalContext } from '../ModalContext';
import styles from './Modal.module.scss'

const Modal = () => {
  const {modal, deactivateModal} = useModalContext()

  useEffect(() => {
    modal.isOpen ? ( document.body.style.overflow = 'hidden' ) : ( document.body.style.overflow = 'unset' );
 }, [modal.isOpen]);

    return (
      <div 
        className={`${styles.background} ${!modal.isOpen && styles.modalClosed}`} 
        onClick={() => deactivateModal()}
      >
        <div 
          className={ modal.context === 'projects' ? styles.largeContent : styles.smallContent} 
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton/>
          {modal.context === 'projects' ? <ProjectModalCard/> : modal.payload}
        </div>
      </div>
    )

}

export default Modal
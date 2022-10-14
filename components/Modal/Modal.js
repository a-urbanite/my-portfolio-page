import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import TextBlock from './TextBlock/TextBlock';
import ButtonBar from './ButtonBar/Buttonbar';
import CloseButton from '../Projects/CloseButton/CloseButton';
import { useModalContext } from '../ModalContext';

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
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.titleBar}>
            <h2 className={styles.contentTitle}>
              {modal.context === 'projects' ?  modal.payload.fields.title : modal.payload}
            </h2>
            <CloseButton/>
          </div>
          {modal.context === 'projects' && <TextBlock modal={modal}/>}
          {modal.context === 'projects' && <ButtonBar modal={modal}/>}
        </div>
      </div>
    )

}

export default Modal
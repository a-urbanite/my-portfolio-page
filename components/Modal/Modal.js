import React from 'react'
import styles from './Modal.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Modal = ({modal, setModal}) => {

  // const

  console.log(modal.project)
  // const closeModal = () => {
  //   setModal({isOpen: false, project: undefined})
  // }

  return (
    <div 
      className={`${styles.modal} ${modal.isOpen ? styles.modalOpen : styles.modalClosed}`} 
      onClick={() => setModal({isOpen: false, project: undefined})}
      >
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>{modal.project?.fields.title}</h2>
        <div className={styles.contentText}>{documentToReactComponents(modal.project?.fields.longDescr)}</div>
      </div>
    </div>
  )
}

export default Modal
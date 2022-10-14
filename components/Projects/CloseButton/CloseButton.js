import React from 'react'
import styles from './CloseButton.module.scss'
import { useModalContext } from '../../ModalContext'

const CloseButton = () => {
  const { deactivateModal } = useModalContext()

  return (
    <div className={styles.container} onClick={() => deactivateModal()}>
      <button type="button" className={styles.btnClose}>
        <span className={styles.iconCross}></span>
        <span className={styles.visuallyHidden}>Close</span>
      </button>
    </div>
  )
}

export default CloseButton
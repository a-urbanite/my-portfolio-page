import React from 'react'
import styles from './CloseButton.module.scss'

const CloseButton = ({setModal}) => {
  return (
    <div className={styles.container} onClick={() => setModal({isOpen: false, project: undefined})}>
      <button type="button" className={styles.btnClose}>
        <span className={styles.iconCross}></span>
        <span className={styles.visuallyHidden}>Close</span>
      </button>
    </div>
  )
}

export default CloseButton
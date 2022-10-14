import React from 'react'
import styles from './Footer.module.scss'
import { useModalContext } from '../ModalContext'
import Impressum from './Impresssum/Impressum'

const Footer = () => {

  const { activateModal } = useModalContext()

  return (
    <div className={styles.container}>
      <span 
        className={styles.button}
        onClick={() => activateModal('footer', <Impressum/>)}
      >Impressum</span>
    </div>
  )
}

export default Footer
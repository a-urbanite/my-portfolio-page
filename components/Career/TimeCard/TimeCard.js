import React from 'react'
import styles from './TimeCard.module.scss'

const TimeCard = ({timeItem}) => {
  return (
    <>
      <h2 className={styles.title}>{timeItem.title}</h2>
      <p className={styles.text}>{timeItem.cardText}</p>
    </>
  )
}

export default TimeCard
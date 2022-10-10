import React from 'react'
import styles from './TimeCard.module.scss'

const TimeCard = ({timeItem}) => {
  return (
    <div className={styles.container}>
      <h1>{timeItem.title}</h1>
      <hr/>
      <p>{timeItem.cardText}</p>
    </div>
  )
}

export default TimeCard
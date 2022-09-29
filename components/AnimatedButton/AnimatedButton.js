import React from 'react'
import styles from './AnimatedButton.module.scss'

const AnimatedButton = ({text}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.btn}>
          <div className={styles.btnText}>{text}</div>
          <svg className={styles.anim} width="180px" height="60px" viewBox="0 0 180 60" >
            <polyline points="179,1 179,59 1,59 1,1 179,1" /*class="bg-line"*/ />
            <polyline points="179,1 179,59 1,59 1,1 179,1" /*class="hl-line"*/ />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AnimatedButton
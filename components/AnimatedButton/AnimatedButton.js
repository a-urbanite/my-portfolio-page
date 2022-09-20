import React from 'react'
import styles from './AnimatedButton.module.scss'

const AnimatedButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <button className={styles.btn}>
          <svg className={styles.anim} width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>HOVER ME</span>
        </button>
      </div>
    </div>
  )
}

export default AnimatedButton
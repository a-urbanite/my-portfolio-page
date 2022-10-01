import React from 'react'
import styles from './AnimatedButton.module.scss'

const AnimatedButton = ({text, url}) => {

  return (
    <div className={styles.container}>
      <a href={url} target="__blank">
        <button className={styles.btn}>
          <div className={styles.text}>{text}</div>
          <svg className={styles.anim}  viewBox="0 0 180 60" >
            <polyline points="179,1 179,59 1,59 1,1 179,1" /*class="bg-line"*/ />
            <polyline points="179,1 179,59 1,59 1,1 179,1" /*class="hl-line"*/ />
          </svg>
          {/* <div className={styles.background}></div> */}
        </button>
      </a>
    </div>
  )
}

export default AnimatedButton
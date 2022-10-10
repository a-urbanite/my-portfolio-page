import React from 'react'
import styles from './Career.module.scss'
// import Chronology from 'react-chronos';
import Timeline from './TimeLine/TimeLine'



const Career = () => {

  return (
    <div className={styles.container} id="timelineSection">
      <div className={styles.top}>
        <h1>My Coding Journey</h1>
      </div>
      <div className={styles.middle}>
        <Timeline/>
      </div>
      <div className={styles.bottom}>
      </div>
    </div>
  )
}

export default Career
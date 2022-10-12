import React, { Suspense } from 'react'
import styles from './Career.module.scss'
import Timeline from './TimeLine/TimeLine'

const Career = ({timelineEntries}) => {

  return (
    <div className={styles.container} id="timelineSection">
      <div className={styles.top}>
        <h1 className={styles.title}>My Journey</h1>
      </div>
      <div className={styles.middle}>
        <Timeline timelineEntries={timelineEntries}/>
      </div>
      <div className={styles.bottom}>
      </div>
    </div>
  )
}

export default Career
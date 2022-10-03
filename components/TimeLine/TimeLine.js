import React from 'react'
import styles from './TimeLine.module.scss'
// import Chronology from 'react-chronos';



const TimeLine = () => {

const events = [
  {id: 1, details: "1111"},
  {id: 2, details: "2222"},
  {id: 3, details: "3333"}
]

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        {/* <Chronology type="horizontal">
            {events.map(event => (
              <>
                <div class="marker"></div>
                <div class="event">{ event.details }</div>
              </>
            ))}
        </Chronology> */}
      </div>
    </div>
  )
}

export default TimeLine
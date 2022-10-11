import React from 'react'
import styles from './TimeCard.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TimeCard = ({timeLineEntry}) => {

  return (
    <>
      <h2 className={styles.title}>{timeLineEntry.fields.cardHeader}</h2>
      <>{documentToReactComponents(timeLineEntry.fields.cardText)}</>
    </>
  )
}

export default TimeCard
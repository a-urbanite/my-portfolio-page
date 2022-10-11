import React from 'react'
import styles from './SkillSetCard.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const SkillSetCard = ({skillSet}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}><hr className={styles.horizontalLine}/>{skillSet.fields.title}</h2>
      {documentToReactComponents(skillSet.fields.content)}
    </div>
  )
}

export default SkillSetCard
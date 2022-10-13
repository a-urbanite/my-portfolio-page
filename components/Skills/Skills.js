import React from 'react'
import styles from './Skills.module.scss'
import SkillSetCard from './SkillSetCard.js/SkillSetCard'

const Skills = ({skillSets}) => {

const sortedSkillSets = skillSets.sort((a,b) => a.fields.order - b.fields.order) 

  return (
    <div className={styles.container} id="skillsSection">
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Skillset</h1>
      </div>
      <div className={styles.skillBlock}>
        {sortedSkillSets.map((skillSet, index) => {
          return <SkillSetCard skillSet={skillSet} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Skills
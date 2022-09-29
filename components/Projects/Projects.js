import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Projects.module.scss'

const Projects = ({projects}) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.verticalTitle}>Projects</h1>  
      </div>
      <div className={styles.gallery}>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects
import React, { useState, useEffect} from 'react'
import styles from './Projects.module.scss'
import Gallery from './Gallery/Gallery'

const Projects = ({projects}) => {

  return (
    <div className={styles.container} id="projectsSection">
      <div className={styles.titleBlock}>
        <h1 className={styles.verticalTitle}>Projects</h1>  
      </div>
      <div className={styles.galleryBlock}>
        <Gallery projects={projects}/>
      </div>
    </div>
  )
}

export default Projects
import React, { useState, useEffect} from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Projects.module.scss'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Projects = ({projects}) => {
const [sliceStart, setsliceStart] = useState(0)
const projectsSlice = projects.slice(sliceStart, sliceStart+6)

const decreaseSliceCounter = () => {
  if (sliceStart == 0) return;
  setsliceStart((prev) => prev-2)
}

const increaseSliceCounter = () => {
  if (projects.length < sliceStart+6) return;
  setsliceStart((prev) => prev+2)
}


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.verticalTitle}>Projects</h1>  
      </div>
      <div className={styles.galleryWrapper}>
        <FaChevronLeft className={styles.arrowKey} onClick={() => decreaseSliceCounter()}/>
        <div className={styles.gallery}>
          {projectsSlice.map((project, index) => {
            return <ProjectCard key={index} project={project}/>
          })}
        </div>
        <FaChevronRight className={styles.arrowKey} onClick={() => increaseSliceCounter()}/>
      </div>
    </div>
  )
}

export default Projects
import React, { useState } from 'react'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';


const ProjectCard = ({project, setModal}) => {

  return (
    <div className={styles.cardContainer} >
        <Image 
          className={styles.banner} 
          src={`https:${project.fields.projectBanner.fields.file.url}`} 
          alt={project.fields.projectBanner.fields.file.fileName} 
          layout='fill' 
        />
        <Tilt>
          <div 
            className={styles.textBox} 
            onClick={() => setModal({isOpen: true, project: project})}>
            <h3>{project.fields.title}</h3>
            <p>{project.fields.shortDescr}</p>
          </div>
        </Tilt>
        
    </div>
  )
}

export default ProjectCard
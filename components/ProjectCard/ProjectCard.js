import React from 'react'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({project}) => {
const imgUrl = `https:${project.fields.projectBanner.fields.file.url}`

  return (
    <div className={styles.cardContainer}>
        <Image className={styles.banner} src={imgUrl} alt={project.fields.projectBanner.fields.file.fileName} layout='fill' ></Image>
        <Tilt>
          <div className={styles.textBox}>
            <h3>{project.fields.title}</h3>
            <p>{project.fields.shortDescr}</p>
          </div>
        </Tilt>
    </div>
  )
}

export default ProjectCard
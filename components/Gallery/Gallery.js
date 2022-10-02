import React, { useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';
import ProjectCard from '../ProjectCard/ProjectCard'
import Modal from '../Modal/Modal';
import styles from './Gallery.module.scss'

const Gallery = ({projects}) => {
  const [modal, setModal] = useState({isOpen: true, project: undefined})
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
    <div className={styles.galleryContainer}>
      <FaChevronLeft className={`${styles.arrowKey} ${sliceStart == 0 && styles.inactiveArrow}`} onClick={() => decreaseSliceCounter()}/>
      <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} tiltReverse>
        <div className={styles.gallery}>
          {projectsSlice.map((project) => {
            return <ProjectCard key={Math.random()} project={project} setModal={setModal}/>
          })}
        </div>
      </Tilt>
      <FaChevronRight className={`${styles.arrowKey} ${projects.length < sliceStart+6 && styles.inactiveArrow}`} onClick={() => increaseSliceCounter()}/>
      <Modal modal={modal} setModal={setModal}/>
    </div>
  )
}

export default Gallery
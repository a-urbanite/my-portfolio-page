import React, { useState, useEffect, useContext, useRef} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Gallery.module.scss'
import { useScreenContext } from '../../ScreenContext';
import { useSwipeable } from 'react-swipeable';

const Gallery = ({projects}) => {

  const screenContext = useScreenContext();
  const [galleryFillCount, setgalleryFillCount] = useState(null)
  const [sliceStart, setsliceStart] = useState(0)
  const projectsSlice = projects.slice(sliceStart, sliceStart+galleryFillCount)
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => increaseSliceCounter(),
    onSwipedRight: (e) => decreaseSliceCounter(),
  });

  useEffect(() => {
    if (screenContext == 'desktop') { setgalleryFillCount(6) }
    else if (screenContext == 'tablet') { setgalleryFillCount(4) }
    else { setgalleryFillCount(1) }
  }, [screenContext])
  
  const increaseSliceCounter = () => {
    if (projects.length <= sliceStart+galleryFillCount) return;
    setsliceStart((prev) => prev+galleryFillCount)
  }

  const decreaseSliceCounter = () => {
    if (sliceStart == 0) return;
    setsliceStart((prev) => prev-galleryFillCount)
  }
  
  return (
    <div className={styles.galleryContainer} {...swipeHandlers}>
      <FaChevronLeft 
        className={`${styles.arrowKey} ${sliceStart == 0 && styles.inactiveArrow}`} 
        onClick={() => decreaseSliceCounter()}
      />
      <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} tiltReverse>
        <div className={styles.gallery}>
          {projectsSlice.map((project) => {
            return <ProjectCard key={Math.random()} project={project}/>
          })}
        </div>
      </Tilt>
      <FaChevronRight 
        className={`${styles.arrowKey} ${projects.length <= sliceStart+galleryFillCount && styles.inactiveArrow}`} 
        onClick={() => increaseSliceCounter()}
      />
    </div>
  )
}

export default Gallery
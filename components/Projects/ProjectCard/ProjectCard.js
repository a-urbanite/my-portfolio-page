import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import { useModalContext } from '../../ModalContext';

const ProjectCard = ({project}) => {
  const {setModal} = useModalContext()

  return (
    <div 
      className={styles.cardContainer} 
      onClick={() => setModal({isOpen: true, project: project})}
      >
        <Image 
          className={styles.banner} 
          src={`https:${project.fields.projectBanner.fields.file.url}`} 
          alt={project.fields.projectBanner.fields.file.fileName} 
          layout='fill' 
        />
        <Tilt>
          <div className={styles.textBox} >
            <h3>{project.fields.title}</h3>
            <p>{project.fields.shortDescr}</p>
          </div>
        </Tilt>
        
    </div>
  )
}

export default ProjectCard
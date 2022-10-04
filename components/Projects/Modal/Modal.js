import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import AnimatedButton from '../../AnimatedButton/AnimatedButton';
import CloseButton from '../CloseButton/CloseButton';


const Modal = ({modal, setModal}) => {

  useEffect(() => {
    modal.isOpen ? ( document.body.style.overflow = 'hidden' ) : ( document.body.style.overflow = 'unset' );
 }, [modal.isOpen]);

  return (
    <div 
      className={`${styles.background} ${modal.isOpen ? styles.modalOpen : styles.modalClosed}`} 
      onClick={() => setModal({isOpen: false, project: undefined})}
      >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.contentTitle}>{modal.project?.fields.title}</h2>
        <CloseButton setModal={setModal}/>
        <div className={styles.contentText}>{documentToReactComponents(modal.project?.fields.longDescr)}</div>
        <div className={styles.buttonBar}>
            {modal.project?.fields?.gitRepoLink && <AnimatedButton 
              text={'Check the Repo'} 
              url={modal.project?.fields?.gitRepoLink}
              />
            }
            {modal.project?.fields?.liveLink && <AnimatedButton 
              text={'Live version'} 
              url={modal.project?.fields?.liveLink}
              />
            }
        </div>
      </div>
    </div>
  )
}

export default Modal
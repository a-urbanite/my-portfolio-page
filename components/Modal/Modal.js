import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import AnimatedButton from '../AnimatedButton/AnimatedButton';


const Modal = ({modal, setModal}) => {

  console.log(modal)

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
        <div className={styles.contentText}>{documentToReactComponents(modal.project?.fields.longDescr)}</div>
        <div className={styles.iconBar}>
          <a href='https://github.com/a-urbanite' target='blank'>
            <AnimatedButton text={'Check the Repo'} url={modal.project?.fields?.gitRepoLInk}/>
          </a>
          <a href='https://github.com/a-urbanite' target='blank'>
            <AnimatedButton text={'Live version'} url={'sasdasdsa'}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Modal
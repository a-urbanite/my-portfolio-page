import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types'
// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import AnimatedButton from '../AnimatedButton/AnimatedButton';
import CloseButton from '../Projects/CloseButton/CloseButton';
import { useModalContext } from '../ModalContext';

const Modal = () => {
  const {modal, deactivateModal} = useModalContext()

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} target={'_blank'} rel="noreferrer">{node.content[0].value}</a>;
      }
    }
  }

  useEffect(() => {
    modal.isOpen ? ( document.body.style.overflow = 'hidden' ) : ( document.body.style.overflow = 'unset' );
 }, [modal.isOpen]);

 if (modal.context === 'projects') {
   return (
     <div 
       className={`${styles.background} ${!modal.isOpen && styles.modalClosed}`} 
       onClick={() => deactivateModal()}
       >
       <div className={styles.content} onClick={(e) => e.stopPropagation()}>
         <div className={styles.titleBar}>
           <h2 className={styles.contentTitle}>{modal.payload?.fields.title}</h2>
           <CloseButton/>
         </div>
         <div className={styles.contentText}>{documentToReactComponents(modal.payload?.fields.longDescr, options)}</div>
         <div className={styles.buttonBar}>
             {modal.payload?.fields?.gitRepoLink && <AnimatedButton 
               text={'Check the Repo'} 
               url={modal.payload?.fields?.gitRepoLink}
               />
             }
             {modal.payload?.fields?.liveLink && <AnimatedButton 
               text={'Live version'} 
               url={modal.payload?.fields?.liveLink}
               />
             }
         </div>
       </div>
     </div>
   )
 }

 if (modal.context === 'contact') {
  return (
    <div 
    className={`${styles.background} ${!modal.isOpen && styles.modalClosed}`} 
    onClick={() => deactivateModal()}
    >
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      <div className={styles.titleBar}>
        <h2 className={styles.contentTitle}>{modal.payload}</h2>
        <CloseButton setModal={setModal}/>
      </div>
    </div>
  </div>
  )
 }
}

export default Modal
import React from 'react'
import AnimatedButton from '../../AnimatedButton/AnimatedButton';
import { useModalContext } from '../../ModalContext'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types'
import styles from './ProjectModalCard.module.scss'

const ProjectModalCard = () => {
  const {modal} = useModalContext()

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} target={'_blank'} rel="noreferrer">{node.content[0].value}</a>;
      }
    }
  }
  
  return (
    <>
      <h2 className={styles.contentTitle}>
        {modal.payload.fields.title}
      </h2>
      <div className={styles.contentText}>
        {documentToReactComponents(modal.payload?.fields.longDescr, options)}
      </div>
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
    </>
  )
}

export default ProjectModalCard
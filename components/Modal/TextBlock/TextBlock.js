import React from 'react'
import styles from './TextBlock.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types'

const TextBlock = ({modal}) => {

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} target={'_blank'} rel="noreferrer">{node.content[0].value}</a>;
      }
    }
  }

  return (
    <div className={styles.contentText}>
      {documentToReactComponents(modal.payload?.fields.longDescr, options)}
    </div>
  )
}

export default TextBlock
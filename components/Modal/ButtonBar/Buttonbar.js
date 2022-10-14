import React from 'react'
import AnimatedButton from '../../AnimatedButton/AnimatedButton';
import styles from './ButtonBar.module.scss'

const ButtonBar = ({modal}) => {
  return (
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
  )
}

export default ButtonBar
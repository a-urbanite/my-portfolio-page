import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Header = ({profilePic, cv}) => {

  // console.log(profilePic)

  return (
    <div className={styles.container}>
      <div className={styles.textBlock}> 
        <h2 className={styles.subTitle}><hr className={styles.horizontalLine}/>Hello, I am</h2>
        <h1 className={styles.mainTitle}>Alexander Städtler</h1>
        <h2 className={styles.subTitle}><span className={styles.animatedJobTitles}></span></h2>
          
        <div className={styles.iconBar}>
          <AnimatedButton text={'Download CV'} url={`https:${cv.fields.asset.fields.file.url}`}></AnimatedButton>
          <a href='https://github.com/a-urbanite' target='blank'><FaGithubSquare className={styles.icon} /></a>
          <a href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin className={styles.icon} /></a>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <Image 
          src={`https:${profilePic.fields.asset.fields.file.url}`}
          alt='profile_pic'       
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default Header
import Image from 'next/image'
import React from 'react'
import styles from './Intro.module.scss'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';

const Intro = ({fileAssets}) => {

  const profilePic = fileAssets.find((asset) => asset.fields.assetTitle === "profilePic")
  const cv = fileAssets.find((asset) => asset.fields.assetTitle === "cv")

  return (
    <div className={styles.container} id="headerSection">
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
        <Tilt className={styles.textBox}>
          <p className={styles.introText}>{profilePic.fields.assetSubtitle}</p>
        </Tilt>
      </div>
    </div>
  )
}

export default Intro
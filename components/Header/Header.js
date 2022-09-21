import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}> 
        <h2 className={styles.subTitle}><hr className={styles.horizontalLine}/>Hello, I am</h2>
        <h1 className={styles.mainTitle}>Alexander Städtler</h1>
        <h2 className={styles.subTitle}><span className={styles.animatedJobTitles}></span></h2>
          
        {/* <span className={styles.downloadCV}>Download CV</span> */}
        <AnimatedButton text={'Download CV'}></AnimatedButton>
      </div>
      <div className={styles.imageBlock}>
        <Image 
          src='/profile_pic.png'
          alt='profile_pic'       
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default Header
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}> 
        <p>Hello, I am</p>
        <p>Alexander Städtler</p>
        <p>Fullstack Webdeveloper</p>
        {/* <span className={styles.downloadCV}>Download CV</span> */}
        <AnimatedButton>assdsa</AnimatedButton>
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
import React from 'react'
import styles from './Impressum.module.scss'
import { SiMaildotru } from 'react-icons/si'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'

import { HiOutlineHome } from 'react-icons/hi'

import { IoPersonOutline } from 'react-icons/io5'

const Impressum = () => {
  return (
    <div className={styles.container}>
      <h2>Impressum</h2><br/>
      <p>This website is provided by:</p><br/>
      <p><IoPersonOutline/> Alexander Städtler</p>
      <p><HiOutlineHome/> Hüttenroder Weg 5-9, 12059 Berlin</p>
      <p><FiPhone/> 017687848469</p>
      <p><SiMaildotru/> staedtler.alexander@gmail.com</p>
    </div>
  )
}

export default Impressum
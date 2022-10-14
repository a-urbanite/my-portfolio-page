import React from 'react'
import styles from './Impressum.module.scss'

const Impressum = () => {
  return (
    <div className={styles.container}>
      <h2>Impressum</h2><br/>
      <p>This website is provided by:</p><br/>
      <p>Alexander Städtler</p>
      <p>Hüttenroder Weg 5-9</p>
      <p>12059 Berlin</p>
      <p>Tel: 017687848469</p>
      <p>Email: staedtler.alexander@gmail.com</p>
    </div>
  )
}

export default Impressum
import React, { useState, useEffect, useRef } from 'react'
import styles from './HamburgerIcon.module.scss'

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false)
  const iconRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
        if (iconRef.current && !iconRef.current.contains(event.target)) {
            setIsOpen(!isOpen)
        }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
          document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [isOpen]);


  return (
    <div ref={iconRef} className={styles.container}>
      <div 
        className={`${styles.navIcon4} ${isOpen? styles.open : ''}`} 
        onClick={() => { setIsOpen(!isOpen) }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default HamburgerIcon
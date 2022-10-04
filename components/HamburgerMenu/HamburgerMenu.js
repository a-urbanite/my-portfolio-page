import React from 'react'
import { Menu } from '@headlessui/react'
import styles from './HamburgerMenu.module.scss'
import { Turn as Hamburger } from 'hamburger-react'

const HamburgerMenu = () => {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
  }

  return (
    <Menu as="div" className={styles.hamContainer}>
      <Menu.Button className={styles.button}><Hamburger label="Show menu" color="white"/></Menu.Button>
      <Menu.Items className={styles.menu}>
        <Menu.Item>
            <span onClick={() => scrollTo("headerSection")}>Intro</span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={() => scrollTo("projectsSection")}>Projects</span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={() => scrollTo("timelineSection")}>Timeline</span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={() => scrollTo("skillsSection")}>Skills</span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={() => scrollTo("contactSection")}>Contact</span>
        </Menu.Item>

      </Menu.Items>
    </Menu>
  )
}

export default HamburgerMenu;

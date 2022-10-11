import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import styles from './HamburgerMenu.module.scss'
import HamburgerIcon from './HamburgerIcon/HamburgerIcon'

const HamburgerMenu = () => {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
  }

  return (
    <Menu as="div" className={styles.hamContainer}>
      <Menu.Button className={styles.button}><HamburgerIcon/></Menu.Button>
      {/* <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        > */}
        <Menu.Items className={styles.menu}>
          <Menu.Item className={styles.menuItem}>
              <span onClick={() => scrollTo("headerSection")}>Intro</span>
          </Menu.Item>
          <Menu.Item className={styles.menuItem}>
              <span onClick={() => scrollTo("projectsSection")}>Projects</span>
          </Menu.Item>
          <Menu.Item className={styles.menuItem}>
              <span onClick={() => scrollTo("timelineSection")}>Timeline</span>
          </Menu.Item>
          <Menu.Item className={styles.menuItem}>
              <span onClick={() => scrollTo("skillsSection")}>Skills</span>
          </Menu.Item>
          <Menu.Item className={styles.menuItem}>
              <span onClick={() => scrollTo("contactSection")}>Contact</span>
          </Menu.Item>
        </Menu.Items>
      {/* </Transition> */}
    </Menu>
  )
}

export default HamburgerMenu;

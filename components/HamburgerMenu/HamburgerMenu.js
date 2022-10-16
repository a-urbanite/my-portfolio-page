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
    {({ open }) => (
      <>
        <Menu.Button className={styles.button}><HamburgerIcon/></Menu.Button>
        <Transition
          show={open}
          enter={styles.enterTrans}
          enterFrom={styles.enterFromTrans}
          enterTo={styles.enterToTrans}
          leave="transition duration-7500 ease-out"
          leaveFrom="transform scale-1000 opacity-100"
          leaveTo="transform scale-9500 opacity-0"
        >
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
        </Transition>
      </>
    )}
    </Menu>
  )
}

export default HamburgerMenu;

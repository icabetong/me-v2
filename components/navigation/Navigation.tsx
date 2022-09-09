import { useState, FC } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

import NavigationLink from './NavigationLink'
import Box from '../core/Box'
import data from '../../data/data.json'

const Navigation: FC<NavigationProps> = ({ isAnimated }) => {
  const [open, setOpen] = useState(false)
  const onHandleMenu = () => setOpen((prev) => !prev)

  const navigationContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.6,
        staggerChildren: 0.1,
      },
    },
  }

  const list = (
    <motion.ul
      variants={navigationContainer}
      initial={isAnimated ? 'hidden' : 'visible'}
      animate="visible"
      className="flex flex-col px-2 py-2 md:flex-row md:space-x-8 md:text-md md:font-medium"
    >
      <NavigationLink key="about" route="about" type="section" />
      <NavigationLink key="skills" route="skills" type="section" />
      <NavigationLink key="works" route="works" type="section" />
      <NavigationLink key="contact" route="contact" type="page" />
    </motion.ul>
  )

  return (
    <nav className="font-inter relative z-30 border-gray-200 rounded h-fit">
      <Box>
        <div className="container flex flex-wrap justify-between items-center py-4">
          <motion.a
            href="/"
            initial={isAnimated && { x: -200, opacity: 0 }}
            animate={isAnimated && { x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center font-semibold text-xl"
          >
            {data.domain}
          </motion.a>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.4 }}
            className="md:hidden"
          >
            <motion.button
              type="button"
              data-collapse-toggle="mobile-menu"
              className="inline-flex items-center p-2 ml-3 text-sm bg-tran text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navajo-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, x: '-2px', y: '2px' }}
              onClick={onHandleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenu
                className={`h-5 w-5 ${!open ? 'block' : 'hidden'}`}
              />
              <HiOutlineX className={`h-5 w-5 ${open ? 'block' : 'hidden'}`} />
            </motion.button>
          </motion.div>
          <div className="w-full hidden md:block md:w-auto">{list}</div>
        </div>
        <motion.div
          animate={{ scale: open ? 1 : 0 }}
          className={`${
            open ? 'block' : 'hidden'
          } bg-content-900 w-full md:hidden md:w-auto rounded`}
          id="nav-menu"
        >
          {list}
        </motion.div>
      </Box>
    </nav>
  )
}

export default Navigation

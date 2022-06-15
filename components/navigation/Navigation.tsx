import { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"

import { Route } from "./Route"
import NavigationLink from "./NavigationLink"

const routes: Route[] = ["about", "skills", "works", "contact"]
const Navigation = () => {
  const [open, setOpen] = useState(false)
  const onHandleMenu = () => setOpen((prev) => !prev)

  const nameContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.5
      }
    }
  }

  const navigationContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const name = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const list = (
    <motion.ul
      variants={navigationContainer}
      initial="hidden"
      animate="visible" 
      className="flex flex-col px-2 py-2 md:flex-row md:space-x-8 md:text-md md:font-medium">
      { routes.map((route) => <NavigationLink key={route} route={route}/>) }
    </motion.ul>
  )

  return (
    <nav className="bg-russian border-gray-200 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4 py-4">
        <motion.a 
          href="#"
          variants={nameContainer}
          initial="hidden"
          animate="visible"
          className="flex items-center">
          <motion.span variants={name} className="font-semibold text-xl">icabetong</motion.span>
        </motion.a>
        <motion.button 
          type="button"
          data-collapse-toggle="mobile-menu"  
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
          onClick={onHandleMenu}>
          <span className="sr-only">Open main menu</span>
          <MenuIcon className={`h-5 w-5 ${!open ? "block" : "hidden"}`}/>
          <XIcon className={`h-5 w-5 ${open ? "block" : "hidden"}`}/>
        </motion.button>   
        <div className='w-full hidden md:block md:w-auto'>
        {list}
        </div>
      </div>
      <div 
        className={`${open ? 'block' : 'hidden'} bg-content w-full md:hidden md:w-auto`} id="nav-menu">
        {list}
      </div>
    </nav>
  )
}

export default Navigation
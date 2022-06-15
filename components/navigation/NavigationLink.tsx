import { motion } from "framer-motion"
import { Route } from "./Route"

type NavigationLinkProps = {
  route: Route
}
const NavigationLink = (props: NavigationLinkProps) => {
  const items = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.li variants={items}>
      <a href="#" className="block text-md py-2 pr-4 pl-3 text-azureish-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:hover:text-navajo-white" aria-current="page">
        {props.route}
      </a>
    </motion.li>
  )
}

export default NavigationLink
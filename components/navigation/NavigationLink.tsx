import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"
import { Route } from "./Route"

type NavigationLinkProps = {
  route: Route
}
const NavigationLink = (props: NavigationLinkProps) => {
  const { t } = useTranslation('common')
  const items = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.li variants={items} className="hover:bg-navajo-white md:hover:bg-transparent text-azureish-white hover:text-russian md:hover:text-navajo-white">
      <a href="#" className="block text-md py-2 pr-4 pl-3  rounded md:bg-transparent md:p-0" aria-current="page">
        {t(`section.${props.route}`)}
      </a>
    </motion.li>
  )
}

export default NavigationLink
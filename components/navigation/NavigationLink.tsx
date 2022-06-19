import { useTranslation } from "next-i18next"
import Link from "next/link"
import { motion } from "framer-motion"
import { Route } from "./Route"
import useBreakpoint from "../../shared/hooks/useBreakpoint"

type NavigationLinkProps = {
  route: Route
}
const NavigationLink = (props: NavigationLinkProps) => {
  const { t } = useTranslation('common')
  const mdBreakpoint = useBreakpoint('md')
  const items = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.li 
      variants={items}
      whileHover={{ scale: mdBreakpoint ? 1.1 : 1 }}
      className="p-2 my-2 rounded-md hover:bg-navajo-white md:hover:bg-transparent text-azureish-white hover:text-russian md:hover:text-navajo-white md:p-0 md:mx-0">
      <Link href={`#${props.route}`} className="block text-md py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">
        <a>{t(`navigation.${props.route}`)}</a>
      </Link>
    </motion.li>
  )
}

export default NavigationLink